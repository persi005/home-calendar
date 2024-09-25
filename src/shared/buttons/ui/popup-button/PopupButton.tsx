'use client'

import styles from '@/shared/buttons/ui/popup-button/PopupButton.module.scss'
import { cn } from '@/shared/lib/utils/cn'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = {
    variant: 'tinted'
    color: 'blue' | 'gray'
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function PopupButton({ className, children, variant, color, ...props }: Props) {
    return (
        <button className={cn(className, styles.button)} data-variant={variant} data-color={color} {...props}>
            {children}
        </button>
    )
}
