import { useState } from 'react';
export const UseModal = (initialValue: boolean) => {

    const [show, showState] = useState<boolean>(initialValue);

    return {
        show,
        showState
    }
}