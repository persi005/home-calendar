'use client'

import styles from '@/entities/adding-event/ui/AddingEventPopup/AddingEventPopup.module.scss'
import { ColorItem } from '@/entities/adding-event/ui/color-item/ColorItem'
import { InputActionIcon } from '@/entities/adding-event/ui/input-action-icon/InputActionIcon'
import { LinkButton } from '@/shared/buttons/ui/link-button/LinkButton'
import { PopupButton } from '@/shared/buttons/ui/popup-button/PopupButton'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { Input } from '@/shared/form/ui/input/Input'
import { Selector } from '@/shared/form/ui/selector/Selector'
import { cn } from '@/shared/lib/utils/cn'

type Props = {
    className?: string
}

export function AddingEventPopup({ className }: Props) {
    return (
        <div className={cn(className, styles.popupBox)}>
            <div className={styles.popup}>
                <div className={styles.popup__inner}>
                    <div className={styles.popup__iconBox}>
                        <CalendarEvent emoji={'🏀'} color={'red'} size={'large'} />
                    </div>

                    <div className={styles.popup__formGroup}>
                        <Input placeholder={'Название'} />
                        <Selector className={styles.popup__emojiSelector} value={'🏀'} />
                    </div>

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

                    <hr className={styles.popup__divider} />

                    <div className={styles.popup__section}>
                        <div className="fieldBoxHeader">
                            <p>Дата события</p>
                        </div>

                        <div className="fieldList">
                            <div className="field">
                                <p className="field__title">Начало</p>

                                <LinkButton>
                                    Добавить дату
                                    <InputActionIcon variant={'add'} size={'medium'} />
                                </LinkButton>
                            </div>

                            <div className="field">
                                <p className="field__title">Окончание</p>

                                <LinkButton>
                                    Добавить дату
                                    <InputActionIcon variant={'add'} size={'medium'} />
                                </LinkButton>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.popup__divider} />

                    <div className={styles.popup__section}>
                        <div className="fieldBoxHeader">
                            <p>Время события</p>
                        </div>

                        <div className="fieldList">
                            <div className="field">
                                <p className="field__title">Начало</p>

                                <LinkButton>
                                    Добавить дату
                                    <InputActionIcon variant={'add'} size={'medium'} />
                                </LinkButton>
                            </div>

                            <div className="field">
                                <p className="field__title">Окончание</p>

                                <LinkButton>
                                    Добавить дату
                                    <InputActionIcon variant={'add'} size={'medium'} />
                                </LinkButton>
                            </div>
                        </div>
                    </div>

                    <hr className={styles.popup__divider} />

                    <div className={styles.popup__section}>
                        <div className="fieldBoxHeader">
                            <p>Повторение события</p>
                        </div>

                        <div className="field__buttonBox">
                            <LinkButton>
                                Добавить повторение
                                <InputActionIcon variant={'add'} size={'medium'} />
                            </LinkButton>
                        </div>
                    </div>
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
