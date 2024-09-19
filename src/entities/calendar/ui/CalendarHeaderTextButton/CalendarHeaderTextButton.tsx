'use client'

import styles from '@/entities/calendar/ui/CalendarHeaderTextButton/CalendarHeaderTextButton.module.scss'

type Props = {
    text: string
}

export function CalendarHeaderTextButton({ text }: Props) {
    return <button className={styles.button}>{text}</button>
}
