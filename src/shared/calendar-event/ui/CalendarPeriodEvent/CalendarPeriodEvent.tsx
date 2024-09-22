'use client'

import styles from '@/shared/calendar-event/ui/CalendarPeriodEvent/CalendarPeriodEvent.module.scss'
import { CalendarPeriodIcon } from '@/shared/calendar-event/ui/CalendarPeriodIcon/CalendarPeriodIcon'

type Props = {
    emoji: string
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
}

export function CalendarPeriodEvent({ emoji, color }: Props) {
    return (
        <div className={styles.CalendarPeriodEvent} data-color={color}>
            <CalendarPeriodIcon emoji={emoji} color={color} size="m" />
        </div>
    )
}
