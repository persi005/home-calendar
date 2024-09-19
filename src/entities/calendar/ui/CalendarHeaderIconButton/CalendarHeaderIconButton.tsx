'use client'

import styles from '@/entities/calendar/ui/CalendarHeaderIconButton/CalendarHeaderIconButton.module.scss'
import { FC, SVGProps } from 'react'

type Props = {
    Icon: FC<SVGProps<SVGElement>>
}

export function CalendarHeaderIconButton({ Icon }: Props) {
    return (
        <button className={styles.button}>
            <Icon />
        </button>
    )
}
