'use client'

import { EventColor } from '@/entities/adding-event/model/eventColor'
import { AddingEventPopup } from '@/entities/adding-event/ui/AddingEventPopup/AddingEventPopup'
import { CalendarBox } from '@/entities/calendar/ui/CalendarBox/CalendarBox'
import { SidebarItem } from '@/entities/sidebar/ui/SidebarItem/SidebarItem'
import { TextDivider } from '@/entities/sidebar/ui/TextDivider/TextDivider'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { CalendarPeriodEvent } from '@/shared/calendar-event/ui/CalendarPeriodEvent/CalendarPeriodEvent'
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import PlusSvg from '/public/icons/symbol/plus.svg'
import styles from './page.module.scss'

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onAddEventClick: React.MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
        onOpen()
    }

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
                                <PlusSvg />
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

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <AddingEventPopup onClose={onClose} />
            </Modal>
        </>
    )
}
