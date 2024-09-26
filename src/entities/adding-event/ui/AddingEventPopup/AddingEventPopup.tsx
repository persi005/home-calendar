'use client'

import styles from '@/entities/adding-event/ui/AddingEventPopup/AddingEventPopup.module.scss'
import { ColorItem } from '@/entities/adding-event/ui/color-item/ColorItem'
import { PopupButton } from '@/shared/buttons/ui/popup-button/PopupButton'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { cn } from '@/shared/lib/utils/cn'

type Props = {
    className?: string
}

export function AddingEventPopup({ className }: Props) {
    return (
        <div className={cn(className, styles.popupBox)}>
            <div className={styles.popup}>
                <div className={styles.popup__iconBox}>
                    <CalendarEvent emoji={'🏀'} color={'red'} size={'large'} />
                </div>

                <div className={styles.popup__formGroup}></div>

                <div className={styles.popup__colorPickerGroup}>
                    <ColorItem color={'red'} selected />
                    <ColorItem color={'orange'} />
                    <ColorItem color={'yellow'} />
                    <ColorItem color={'green'} />
                    <ColorItem color={'aqua'} />
                    <ColorItem color={'blue'} />
                    <ColorItem color={'purple'} />
                    <ColorItem color={'pink'} />
                </div>

                <div className={styles.popup__buttonGroup}>
                    <PopupButton variant="tinted" color="gray">
                        Отменить
                    </PopupButton>
                    <PopupButton variant="tinted" color="blue">
                        Создать
                    </PopupButton>
                </div>
            </div>
        </div>
    )
}
