import { Input } from '@/components/Input';
import { FC } from 'react';

interface IProps {
    placeholder: string;
}

export const FieldInput: FC<IProps> = ({ placeholder }) => {
    return (
        <div>
            <Input placeholder={placeholder} />
        </div>
    );
};
