import { ChangeEvent } from "react";
import { UseTextBox } from "./hooks/useTextBox"
import styles from './TextBox.module.scss'

interface TextBoxProps {
    label: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    name: string;
    value?: string | number;
}
export const TextBox = ({ name, label, value: initialValue = "", onChange }: TextBoxProps) => {

    const { value, onValueChange } = UseTextBox(initialValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        onValueChange(event);
        onChange(event);
    }

    return (
        <>
            <div className={styles.container}>
                <input
                    className={styles['input-field']}
                    name={name}
                    type="text"
                    value={value}
                    onChange={handleOnChange}
                    placeholder={name}
                    autoComplete="true"
                />
                <label>{label}</label>
            </div>
        </>
    )
}
