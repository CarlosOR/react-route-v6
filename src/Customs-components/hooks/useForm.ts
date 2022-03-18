import { useState, ChangeEvent } from 'react';

//export function UseForm<T>(initialState: T)
export const UseForm = <T>(initialState: T) => {

    const [form, setForm] = useState<T>(initialState);

    const onValueChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = target;
        setForm({
            ...form,
            [name]: value
        });
    }
    return {
        form,
        onValueChange
    }
}