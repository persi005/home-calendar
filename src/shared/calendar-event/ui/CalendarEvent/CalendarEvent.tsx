'use client'

import { Temporal } from '@js-temporal/polyfill'
import styles from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent.module.scss'

type Props = {
    emoji: string
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
    time?: string
    isHour12?: boolean
}

export function CalendarEvent({ emoji, color, time, isHour12 }: Props) {
    let formatHour12
    if (time && isHour12) {
        formatHour12 = getHour12Format(time)
    }

    return (
        <div className={styles.CalendarEvent} data-color={color}>
            {formatHour12 && <p className={styles.CalendarEvent__hour12}>{formatHour12}</p>}
            <p className={styles.CalendarEvent__emoji}>{emoji}</p>
            {time && <p className={styles.CalendarEvent__time}>{getTimeFromISO8601(time)}</p>}
        </div>
    )
}

// function getTimeFormat(time: string) {}

function getTimeFromISO8601(time: string) {
    const instant = Temporal.Instant.from(time)
    const date = instant.toString({ smallestUnit: 'minute' })
    return date.split('T').at(1)?.slice(0, -1)
}

function getHour12Format(time: string) {
    const date = new Date(time)
    const usTime = date.toLocaleString('en-US', { hour12: true })
    return usTime.slice(-2)
}
