'use client'

import Image from 'next/image'
import styles from './FormAddButton.module.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    value: string
}

export function FormAddButton({ value, ...props }: Props) {
    return (
        <button className={styles.button} {...props}>
            {value}

            <div className={styles.button__icon}>
                <Image src={'/icons/symbol/plus-bold.svg'} width={20} height={20} alt={'Plus icon'} />
            </div>
        </button>
    )
}
