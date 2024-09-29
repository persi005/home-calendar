'use client'

import styles from '@/entities/adding-event/ui/input-action-icon/InputActionIcon.module.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import CrossBoldSvg from '/public/icons/symbol/cross-bold.svg'
import PlusBoldSvg from '/public/icons/symbol/plus-bold.svg'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    size: 'small' | 'medium'
    variant: 'add' | 'cross'
}

export function InputActionIcon({ size, variant, ...props }: Props) {
    return (
        <div className={styles.button} data-size={size} data-variant={variant} {...props}>
            {variant === 'add' ? <PlusBoldSvg /> : <CrossBoldSvg />}
        </div>
    )
}
