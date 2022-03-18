
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EColorButton } from '../../../Customs-components/Button/Button'
import { UseForm } from '../../../Customs-components/hooks/useForm';
import { TextBox } from '../../../Customs-components/TextBox/TextBox'
import { IOperation } from '../../interfaces/Ioperation';
import styles from './MathOperation.module.scss'

export const MathOperation = () => {
  const { form, onValueChange } = UseForm<IOperation>({
    valueA: 0,
    valueB: 0
  });

  const { valueA, valueB } = form;

  const [calculatedValue, setcalculatedValue] = useState<number>()

  const calculate = () => {
    if (isNumber(valueA) && isNumber(valueB)) {
      setcalculatedValue(parseInt(valueA.toString()) + parseInt(valueB.toString()));
    }
  }

  const isNumber = (num: string | number) => {
    try {
      return !!parseInt(num.toString());
    }
    catch (_) {
      return false;
    }
  }
  const navigate = useNavigate();

  const handleMathOperation = () => {
    navigate("/other-data/OtherData");
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
          <Button text={'Go to other data'} onClick={handleMathOperation} color={EColorButton.red} />
        </div>
        <div className={`${styles.containerItem} ${styles['mt-10px']}`}>
          {
            calculatedValue && <span>{calculatedValue}</span>
          }
        </div>
      </div>
    </>
  )
}
