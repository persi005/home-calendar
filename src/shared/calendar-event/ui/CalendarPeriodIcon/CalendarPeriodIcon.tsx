'use client'

import styles from '@/shared/calendar-event/ui/CalendarPeriodIcon/CalendarPeriodIcon.module.scss'

type Props = {
    emoji: string
    size: 's' | 'm'
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
}

export function CalendarPeriodIcon({ emoji, size = 's', color }: Props) {
    return (
        <div className={styles.CalendarPeriodIcon} data-color={color} data-size={size}>
            {emoji}
        </div>
    )
}
