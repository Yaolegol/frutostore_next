import { createHash } from 'crypto';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import * as fse from 'fs-extra';
import { glob } from 'glob';
import * as path from 'path';

export class SpriteGenerator {
    private iconsDir: string = path.resolve(__dirname, '../../src/icons');
    private outputDir: string = path.resolve(__dirname, '../../public');
    private spriteBaseName: string = 'sprite';

    private parser = new XMLParser({
        attributeNamePrefix: '',
        ignoreAttributes: false,
    });

    private builder = new XMLBuilder({
        attributeNamePrefix: '',
        ignoreAttributes: false,
    });

    private getIconFiles(): string[] {
        return glob.sync('*.svg', { cwd: this.iconsDir });
    }

    private async createSymbolElements(iconFiles: string[]): Promise<any[]> {
        const symbols = [];

        for (const file of iconFiles) {
            const filepath = path.join(this.iconsDir, file);
            const svgObject = await this.parseSvgFile(filepath);

            if (!svgObject || !svgObject.svg) {
                console.warn(`Файл ${file} не содержит корректного SVG`);

                continue;
            }

            const symbolId = path.basename(file, '.svg');
            const symbolElement = this.createSymbolElement(
                svgObject.svg,
                symbolId,
            );
            symbols.push(symbolElement.symbol);
        }

        return symbols;
    }

    private async parseSvgFile(filepath: string): Promise<any | null> {
        try {
            const svgContent = await fse.readFile(filepath, 'utf8');
            const svgObject = this.parser.parse(svgContent);

            return svgObject;
        } catch (error) {
            console.error(`Ошибка при чтении файла ${filepath}:`, error);

            return null;
        }
    }

    private createSymbolElement(svgElement: any, symbolId: string): any {
        delete svgElement.width;
        delete svgElement.height;
        delete svgElement.xmlns;

        const symbolElement = {
            symbol: {
                ...svgElement,
                id: symbolId,
            },
        };

        return symbolElement;
    }

    private buildSprite(symbols: any[]): string {
        const spriteObject = {
            svg: {
                style: 'display:none',
                symbol: symbols,
                xmlns: 'http://www.w3.org/2000/svg',
            },
        };

        return this.builder.build(spriteObject);
    }

    private computeSpriteHash(spriteContent: string): string {
        return createHash('md5')
            .update(spriteContent)
            .digest('hex')
            .slice(0, 8);
    }

    private async writeSpriteFile(
        filename: string,
        content: string,
    ): Promise<boolean> {
        const outputPath = path.join(this.outputDir, filename);

        if (await fse.pathExists(outputPath)) {
            return false;
        }

        await fse.writeFile(outputPath, content, 'utf8');

        return true;
    }

    private async cleanOldSprites(currentFilename: string): Promise<void> {
        const existingSprites = glob.sync(`${this.spriteBaseName}*.svg`, {
            cwd: this.outputDir,
        });

        for (const file of existingSprites) {
            if (file !== currentFilename) {
                const filePath = path.join(this.outputDir, file);
                await fse.unlink(filePath);
            }
        }
    }

    private async writeManifest(hashedFilename: string): Promise<void> {
        const manifest = {
            sprite: hashedFilename,
        };

        const manifestPath = path.join(this.outputDir, 'sprite-manifest.json');

        await fse.writeFile(
            manifestPath,
            JSON.stringify(manifest, null, 2),
            'utf8',
        );
    }

    public async generate() {
        try {
            const iconFiles = this.getIconFiles();

            if (iconFiles.length === 0) {
                console.warn('В директории src/icons не найдено SVG-иконок');
                return;
            }

            const symbols = await this.createSymbolElements(iconFiles);

            if (symbols.length === 0) {
                console.warn('Не удалось создать символы из SVG-иконок');

                return;
            }

            const spriteContent = this.buildSprite(symbols);
            const hash = this.computeSpriteHash(spriteContent);
            const hashedFilename = `${this.spriteBaseName}.${hash}.svg`;

            const isSpriteUpdated = await this.writeSpriteFile(
                hashedFilename,
                spriteContent,
            );

            if (!isSpriteUpdated) {
                console.log('Содержимое спрайта не изменилось');

                return;
            }

            await this.cleanOldSprites(hashedFilename);
            await this.writeManifest(hashedFilename);

            console.log(`Спрайт обновлен: ${hashedFilename}`);
        } catch (error) {
            console.error('Ошибка при генерации спрайта:', error);

            process.exit(1);
        }
    }
}
