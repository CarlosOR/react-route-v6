import { ChangeEvent } from "react";
import { GenericList } from "../../interfaces/GenericList"
import { UseSelectBox } from "./hooks/useSelectBox"
import styles from './SelectBox.module.css'

interface SelectBoxProps {
    label: string;
    values: Array<GenericList>;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    name: string;
}

export const SelectBox = ({ label, name, values, onChange }: SelectBoxProps) => {
    const { value, onValueChange } = UseSelectBox(values);

    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onValueChange(event);
        onChange(event);
    }

    return (
        <>
            <div className={styles.container}>
                <label >{label}</label>
                <div className={styles.select}>
                    <select name={name} onChange={handleOnChange}>
                        <option value="-1" >Seleccione</option>
                        {
                            values.map((v, i) =>
                                <option key={i} value={v.key}>{v.text}</option>
                            )
                        }
                    </select>
                </div>
            </div>

            {/* {JSON.stringify(value, null, 3)} */}
        </>
    )
}
