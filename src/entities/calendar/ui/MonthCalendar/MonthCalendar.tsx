'use client'

import styles from '@/entities/calendar/ui/MonthCalendar/MonthCalendar.module.scss'
import { CalendarDay } from '@/entities/calendar/ui/CalendarDay/CalendarDay'

type Props = {}

export function MonthCalendar({}: Props) {
    return (
        <div className={styles.calendarBox}>
            <div className={styles.dayWeekGroup}>
                <p>Пн</p>
                <p>Вт</p>
                <p>Ср</p>
                <p>Чт</p>
                <p>Пт</p>
                <p>Сб</p>
                <p>Вс</p>
            </div>

            <div className={styles.calendar}>
                <div className={styles.row}>
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                </div>
                <div className={styles.row}>
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                </div>
                <div className={styles.row}>
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                </div>
                <div className={styles.row}>
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                    <CalendarDay />
                </div>
            </div>
        </div>
    )
}
