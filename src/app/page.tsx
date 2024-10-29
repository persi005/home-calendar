'use client'

import { EventColor } from '@/entities/adding-event/model/eventColor'
import { CalendarBox } from '@/entities/calendar/ui/CalendarBox/CalendarBox'
import { ModalHolder } from '@/entities/modal-holder/ui/ModalHolder'
import { ModalHolderContext } from '@/entities/providers/modalHolderProvider'
import { SidebarItem } from '@/entities/sidebar/ui/SidebarItem/SidebarItem'
import { TextDivider } from '@/entities/sidebar/ui/TextDivider/TextDivider'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { CalendarPeriodEvent } from '@/shared/calendar-event/ui/CalendarPeriodEvent/CalendarPeriodEvent'
import Image from 'next/image'
import { useContext } from 'react'
import styles from './page.module.scss'

export default function Home() {
    const { addingEventModal } = useContext(ModalHolderContext)

    const onAddEventClick = addingEventModal.onOpen

    return (
        <>
            <div className={styles.main}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        <div className={styles.sidebarHeader__titleBox}>
                            <p className={styles.sidebarHeader__title}>События</p>
                        </div>

                        <div className={styles.sidebarHeader__buttonGroup}>
                            <button className={styles.sidebarHeader__button} onClick={onAddEventClick}>
                                <Image src={'/icons/symbol/plus.svg'} width={20} height={20} alt={'Plus icon'} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.sidebar__content}>
                        <TextDivider title={'Test'} />
                        <CalendarEvent emoji="🏀" color={EventColor.Red} />
                        <TextDivider title={'Test'} />
                        <CalendarEvent emoji="🏀" color={EventColor.Red} date={'2024-09-17T05:13'} />
                        <TextDivider title={'Test'} />
                        <CalendarEvent emoji="🏀" color={EventColor.Red} date={'2024-09-17T05:13'} isHour12={true} />
                        <TextDivider title={'Test'} />
                        <CalendarPeriodEvent emoji="🏀" color="red" />
                        <TextDivider title={'Test'} />
                        <SidebarItem emoji="🏀" color="red" title="Test" />
                        <SidebarItem
                            emoji="🏀"
                            color="red"
                            title="Test"
                            startDate={'2024-09-17T05:13'}
                            startTime={'2024-09-17T05:13'}
                            endDate={'2024-09-17T05:13'}
                            endTime={'2024-09-17T05:13'}
                        />
                    </div>
                </div>

                <div className={styles.content}>
                    <CalendarBox />
                </div>
            </div>

            <ModalHolder />
        </>
    )
}
