import { ChangeEvent, useState } from "react"

export const UseTextBox = (initialValue: string | number = "") => {
    const [value, setValue] = useState<string | number>(initialValue);

    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return {
        value,
        onValueChange
    }
}