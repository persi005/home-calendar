'use client'

import styles from '@/shared/buttons/ui/link-button/LinkButton.module.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

export function LinkButton({ children, ...props }: Props) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}
