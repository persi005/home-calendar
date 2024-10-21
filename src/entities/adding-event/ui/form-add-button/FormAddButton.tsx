'use client'

import PlusBoldSvg from '/public/icons/symbol/plus-bold.svg'
import styles from './FormAddButton.module.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    value: string
}

export function FormAddButton({ value, ...props }: Props) {
    return (
        <button className={styles.button} {...props}>
            {value}

            <div className={styles.button__icon}>
                <PlusBoldSvg />
            </div>
        </button>
    )
}
