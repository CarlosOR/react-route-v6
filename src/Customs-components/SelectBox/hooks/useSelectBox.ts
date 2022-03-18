import { ChangeEvent, useState } from "react"
import { GenericList } from "../../../interfaces/GenericList"


export const UseSelectBox = (list: Array<GenericList>) => {
    const [value, setValue] = useState<GenericList>();

    const onValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event);
        setValue(list.find(v => v.key == event.target.value));
    }

    return {
        value,
        onValueChange
    }
}