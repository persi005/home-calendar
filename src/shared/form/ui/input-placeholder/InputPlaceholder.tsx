'use client'

import styles from '@/shared/form/ui/input-placeholder/InputPlaceholder.module.scss'

type Props = {
    value?: string
}

export function InputPlaceholder({ value = '' }: Props) {
    return <div className={styles.inputPlaceholder}>{value}</div>
}
