
import { Dispatch } from 'react';
import { Button, EColorButton } from '../Button/Button';
import styles from './Modal.module.scss'

interface ModalProps {
    title: string;
    children: JSX.Element | Array<JSX.Element>;
    show: boolean;
    onShow: Dispatch<React.SetStateAction<boolean>>;
    onResult?: (response: boolean) => void;
}

export const Modal = ({ title, children, show, onShow, onResult }: ModalProps) => {

    const displayModal = () =>
        show ? '' : styles.hidden;

    const closeModal = () => {
        onShow(!show);
    }
    const onClick = (response: boolean) => {
        if (onResult)
            onResult(response);
        onShow(!show);
    }

    return (
        <>
            <div className={`${styles['modal-container']} ${displayModal()}`}>
                <div className={styles['modal-title']}>
                    {title}
                    <span onClick={closeModal} title="Close">[X]</span>
                </div>
                <div className={styles['modal-body']}>
                    {children}
                </div>
                <div className={styles['modal-footer']}>
                    <div className={styles['modal-footer-buttons']}>
                        <div>
                            <Button text={'Accept'} onClick={() => onClick(true)} />
                        </div>
                        <div>
                            <Button color={EColorButton.red} text={'Cancel'} onClick={() => onClick(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
