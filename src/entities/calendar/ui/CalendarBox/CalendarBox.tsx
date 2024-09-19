'use client'

import styles from '@/entities/calendar/ui/CalendarBox/CalendarBox.module.scss'
import { CalendarHeaderTextButton } from '@/entities/calendar/ui/CalendarHeaderTextButton/CalendarHeaderTextButton'
import { CalendarHeaderIconButton } from '@/entities/calendar/ui/CalendarHeaderIconButton/CalendarHeaderIconButton'
import ArrowAngleUpBoldSvg from '/public/icons/symbol/arrow-angle-up-bold.svg'
import ArrowAngleDownBoldSvg from '/public/icons/symbol/arrow-angle-down-bold.svg'
import { MonthCalendar } from '@/entities/calendar/ui/MonthCalendar/MonthCalendar'

type Props = {}

export function CalendarBox({}: Props) {
    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <div className={styles.headerTitleBox}>
                    <p>Июнь 2024</p>
                </div>

                <div className={styles.buttonBox}>
                    <div className={styles.buttonGroup}>
                        <CalendarHeaderTextButton text={'Сегодня'} />
                    </div>

                    <div className={styles.buttonGroup}>
                        <CalendarHeaderIconButton Icon={ArrowAngleUpBoldSvg} />
                        <CalendarHeaderIconButton Icon={ArrowAngleDownBoldSvg} />
                    </div>
                </div>
            </div>

            <MonthCalendar />
        </div>
    )
}
