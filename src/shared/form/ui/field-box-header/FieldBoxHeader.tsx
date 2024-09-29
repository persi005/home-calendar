'use client'

import styles from '@/shared/form/ui/field-box-header/FieldBoxHeader.module.scss'

type Props = {
    title?: string
}

export function FieldBoxHeader({ title = '' }: Props) {
    return (
        <div className={styles.fieldBoxHeader}>
            <p>{title}</p>
        </div>
    )
}
