'use client'

import styles from '@/entities/sidebar/ui/SidebarItem/SidebarItem.module.scss'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { CalendarPeriodEvent } from '@/shared/calendar-event/ui/CalendarPeriodEvent/CalendarPeriodEvent'
import { DateHelper } from '@/shared/lib/utils/dateHelper'
import Image from 'next/image'

type Props = {
    title: string
    emoji: string
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
    isPeriod?: boolean
    isFavorite?: boolean
    startDate?: string
    startTime?: string
    endDate?: string
    endTime?: string
}

export function SidebarItem({
    title,
    emoji,
    color,
    isPeriod = false,
    isFavorite = false,
    startDate,
    startTime,
    endDate,
    endTime,
}: Props) {
    const hasDateOrTime = startDate || startTime || endDate || endTime

    const subtitle = getSubtitle(startDate, startTime, endDate, endTime)

    // DateHelper.GetDetails()

    return (
        <div className={styles.SidebarItem}>
            {isPeriod ? (
                <CalendarEvent emoji={emoji} color={color} date={'2024-09-17T05:13'} />
            ) : (
                <CalendarPeriodEvent emoji={emoji} color={color} />
            )}

            <div className={styles.SidebarItem__titleGroup}>
                {isFavorite ? (
                    <>
                        <div className={styles.SidebarItem__titleBox}>
                            <p className={styles.SidebarItem__title}>{title}</p>
                            <Image src={'/icons/filled/star.svg'} width={20} height={20} alt={'Star icon'} />
                        </div>
                    </>
                ) : (
                    <p className={styles.SidebarItem__title}>{title}</p>
                )}

                {hasDateOrTime && <p className={styles.SidebarItem__subtitle}>{subtitle}</p>}
            </div>
        </div>
    )
}

function getSubtitle(
    startDate: string | undefined,
    startTime: string | undefined,
    endDate: string | undefined,
    endTime: string | undefined,
) {
    // const today = DateHelper.GetToday()
    let res = ''
    if (startDate) {
        const { day, month } = DateHelper.GetDetails(startDate)
        const monthName = GetMonthName(month)
        const monthNameShort = monthName.toLocaleLowerCase().slice(0, 3)
        res += day + ' ' + monthNameShort
    }
    if (startTime) {
        const { time } = DateHelper.GetDetails(startTime)
        if (res === '') {
            res += time
        } else {
            res += ', ' + time
        }
    }
    if (endDate) {
        const { day, month } = DateHelper.GetDetails(endDate)
        const monthName = GetMonthName(month)
        const monthNameShort = monthName.toLocaleLowerCase().slice(0, 3)
        res += ' – ' + day + ' ' + monthNameShort
    }
    if (endTime) {
        const { time } = DateHelper.GetDetails(endTime)
        if (endDate) {
            res += ', ' + time
        } else {
            res += ' – ' + time
        }
    }
    return res
}

function GetMonthName(month: number) {
    switch (month) {
        case 1:
            return 'Январь'
        case 2:
            return 'Февраль'
        case 3:
            return 'Март'
        case 4:
            return 'Апрель'
        case 5:
            return 'Май'
        case 6:
            return 'Июнь'
        case 7:
            return 'Июль'
        case 8:
            return 'Август'
        case 9:
            return 'Сентябрь'
        case 10:
            return 'Октябрь'
        case 11:
            return 'Ноябрь'
        case 12:
            return 'Декабрь'

        default:
            throw new Error(`The argument "month" a was not found: "${month}"`)
    }
}
