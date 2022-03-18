
import { MouseEventHandler } from 'react';
import styles from './Button.module.css'

export enum EColorButton {
    blue = "blue",
    red = "red",
    green = "green"
}

interface ButtonProps {
    text: string;
    color?: EColorButton;
    style?: React.CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, color = EColorButton.blue, style, onClick }: ButtonProps) => {

    return (
        <>
            <div className={styles['button-container']}>
                <button onClick={onClick}
                    className={`${styles['custom-button']} ${styles[color]}`}
                    style={style}
                >
                    {text}
                </button>
            </div>
        </>
    )
}
