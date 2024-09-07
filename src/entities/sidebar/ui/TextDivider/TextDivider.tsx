'use client'

import styles from '@/entities/sidebar/ui/TextDivider/TextDivider.module.scss'

type Props = { title: string }

export function TextDivider({ title }: Props) {
    return <div className={styles.textDivider}>{title}</div>
}
