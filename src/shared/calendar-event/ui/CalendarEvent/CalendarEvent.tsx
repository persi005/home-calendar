'use client'

import styles from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent.module.scss'
import { DateHelper } from '@/shared/lib/utils/dateHelper'

type Props = {
    size?: 'medium' | 'large'
    emoji: string
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
    date?: string
    isHour12?: boolean
}

export function CalendarEvent({ size = 'medium', emoji, color, date, isHour12 }: Props) {
    let time, period
    if (date) {
        time = DateHelper.GetDetails(date).time

        if (isHour12) {
            time = DateHelper.GetDetails(date).periodTime
            period = DateHelper.GetDetails(date).period
        }
    }

    return (
        <div className={styles.CalendarEvent} data-color={color} data-size={size}>
            {isHour12 && <p className={styles.CalendarEvent__hour12}>{period}</p>}
            <p className={styles.CalendarEvent__emoji}>{emoji}</p>
            {time && <p className={styles.CalendarEvent__time}>{time}</p>}
        </div>
    )
}
