'use client'

import styles from '@/entities/calendar/ui/CalendarBox/CalendarBox.module.scss'
import { CalendarHeaderIconButton } from '@/entities/calendar/ui/CalendarHeaderIconButton/CalendarHeaderIconButton'
import { CalendarHeaderTextButton } from '@/entities/calendar/ui/CalendarHeaderTextButton/CalendarHeaderTextButton'
import { MonthCalendar } from '@/entities/calendar/ui/MonthCalendar/MonthCalendar'

export function CalendarBox() {
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
                        <CalendarHeaderIconButton
                            iconPath={'/icons/symbol/arrow-angle-down-bold.svg'}
                            alt={'Arrow angle down icon'}
                        />
                        <CalendarHeaderIconButton
                            iconPath={'/icons/symbol/arrow-angle-up-bold.svg'}
                            alt={'Arrow angle up icon'}
                        />
                    </div>
                </div>
            </div>

            <MonthCalendar />
        </div>
    )
}
