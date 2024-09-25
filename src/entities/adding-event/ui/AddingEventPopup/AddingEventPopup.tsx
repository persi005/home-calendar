'use client'

import styles from '@/entities/adding-event/ui/AddingEventPopup/AddingEventPopup.module.scss'
import { PopupButton } from '@/shared/buttons/ui/popup-button/PopupButton'
import { cn } from '@/shared/lib/utils/cn'

type Props = {
    className?: string
}

export function AddingEventPopup({ className }: Props) {
    return (
        <div className={cn(className, styles.popupBox)}>
            <div className={styles.popup}>
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
