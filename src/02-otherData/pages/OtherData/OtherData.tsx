
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, EColorButton } from '../../../Customs-components/Button/Button'
import { UseForm } from '../../../Customs-components/hooks/useForm'
import { TextBox } from '../../../Customs-components/TextBox/TextBox'
import { IOperation } from '../../interfaces/Ioperation'
import styles from './OtherData.module.scss'

export const OtherData = () => {
    const { form, onValueChange } = UseForm<IOperation>({
        valueA: '',
        valueB: ''
    });

    const { valueA, valueB } = form;

    const [calculatedValue, setcalculatedValue] = useState("")

    const calculate = () => {
        setcalculatedValue(valueA.toString() + valueB.toString());
    }

    const navigate = useNavigate();

    const handleMathOperation = () => {
        navigate("/other-data/MathOperation");
    }

    return (
        <>
            <h1>Other data</h1>
            <div className={styles.container}>
                <div className={styles.containerItem}>
                    <TextBox label={'Value A'} onChange={onValueChange} name={'valueA'} value={valueA} />
                </div>
                <div className={styles.containerItem}>
                    <TextBox label={'Value B'} onChange={onValueChange} name={'valueB'} value={valueB} />
                </div>
                <div className={`${styles.containerItem} ${styles['mt-10px']}`}>
                    <Button text={'Calculate'} onClick={calculate} />
                </div>
                <div className={`${styles.containerItem} ${styles['mt-10px']}`}>
                    <Button text={'Go to math operation'} onClick={handleMathOperation} color={EColorButton.green} />
                </div>
                <div className={`${styles.containerItem} ${styles['mt-10px']}`}>
                    {
                        calculatedValue && <div className={`${styles.containerItem} ${styles['mt-10px']}`}>{calculatedValue}</div>
                    }
                </div>
            </div>
        </>
    )
}
