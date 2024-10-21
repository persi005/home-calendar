'use client'

import styles from '@/shared/form/ui/input/Input.module.scss'
import { cn } from '@/shared/lib/utils/cn'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    _size?: 'small' | 'medium'
}

export function Input({ _size = 'medium', className, ...props }: Props) {
    return <input data-size={_size} className={cn(styles.input, className)} {...props} />
}
