'use client'

import styles from '@/entities/calendar/ui/CalendarDay/CalendarDay.module.scss'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'

type Props = {}

export function CalendarDay({}: Props) {
    return (
        <div className={styles.day}>
            <div className={styles.header}>
                <p className={styles.headerTitle}>3</p>
                <div className={styles.placeholderBox}>
                    <p className={styles.placeholder}>+3 события</p>
                </div>
            </div>

            <div className={styles.slotList}>
                <div className={styles.slot}>
                    <CalendarEvent emoji={'🏀'} color={'red'} />
                </div>
                <div className={styles.slot}></div>
                <div className={styles.slot}></div>
                <div className={styles.slot}></div>
                <div className={styles.slot}></div>
                <div className={styles.slot}></div>
            </div>
        </div>
    )
}
