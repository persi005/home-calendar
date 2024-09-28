'use client'

import styles from '@/shared/form/ui/input/Input.module.scss'
import { cn } from '@/shared/lib/utils/cn'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {}

export function Input({ className, ...props }: Props) {
    return <input className={cn(styles.input, className)} {...props} />
}
