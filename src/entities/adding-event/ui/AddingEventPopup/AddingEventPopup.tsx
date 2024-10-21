'use client'

import { EventColor } from '@/entities/adding-event/model/eventColor'
import { ColorItem } from '@/entities/adding-event/ui/color-item/ColorItem'
import { FormAddButton } from '@/entities/adding-event/ui/form-add-button/FormAddButton'
import { FormIconButton } from '@/entities/adding-event/ui/form-icon-button/FormIconButton'
import { PopupButton } from '@/shared/buttons/ui/popup-button/PopupButton'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { Input } from '@/shared/form/ui/input/Input'
import { Selector } from '@/shared/form/ui/selector/Selector'
import { cn } from '@/shared/lib/utils/cn'
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
import { useState } from 'react'
import styles from './AddingEventPopup.module.scss'

type Props = {
    onClose: () => void
}

export function AddingEventPopup({ onClose }: Props) {
    const [formData, setFormData] = useState({
        name: 'My first event',
        emoji: '🏀',
        startDate: '13 авг, 2024',
        endDate: '13 авг, 2024',
        startTime: '09:00',
        endTime: '23:00',
        color: EventColor.Red,
    })

    const dataHandler = (key: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <ModalContent className={styles.popup} w="334px" sx={{ background: 'var(--gray-50)' }}>
            <ModalBody className={styles.popup__body} p="8px">
                <div>
                    <div className={styles.popup__iconBox}>
                        <CalendarEvent emoji={formData.emoji} color={formData.color} size={'large'} />
                    </div>

                    <div className={styles.popup__formGroup}>
                        <Input
                            placeholder={'Название'}
                            value={formData.name}
                            onChange={(e) => dataHandler('name', e.target.value)}
                        />
                        <Selector className={styles.popup__emojiSelector} value={formData.emoji} />
                    </div>

                    <div className={styles.popup__colorPickerGroup}>
                        {Object.values(EventColor).map((x) => (
                            <ColorItem
                                color={x}
                                selected={x === formData.color}
                                key={x}
                                onClick={() => dataHandler('color', x)}
                            />
                        ))}
                    </div>
                </div>

                <hr className={styles.popup__divider} />

                <div className={styles.popup__sectionList}>
                    <div className={styles.popup__section}>
                        <div className="fieldBoxHeader">
                            <p>Дата события</p>
                        </div>

                        <div className="fieldList">
                            <div className="field">
                                <p className="field__title">Начало</p>

                                {formData.startDate ? (
                                    <div className="form__valueGroup">
                                        <Input
                                            className={styles.popup__input_date}
                                            value={formData.startDate}
                                            _size={'small'}
                                            disabled
                                        />
                                        <FormIconButton
                                            variant={'cross'}
                                            size={'medium'}
                                            onClick={() => dataHandler('startDate', '')}
                                        />
                                    </div>
                                ) : (
                                    <FormAddButton value={'Добавить дату'} />
                                )}
                            </div>

                            <div className="field">
                                <p className="field__title">Окончание</p>

                                {formData.endDate ? (
                                    <div className="form__valueGroup">
                                        <Input
                                            className={styles.popup__input_date}
                                            value={formData.endDate}
                                            _size={'small'}
                                            disabled
                                        />
                                        <FormIconButton
                                            variant={'cross'}
                                            size={'medium'}
                                            onClick={() => dataHandler('endDate', '')}
                                        />
                                    </div>
                                ) : (
                                    <FormAddButton value={'Добавить дату'} />
                                )}
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

                                {formData.startTime ? (
                                    <div className="form__valueGroup">
                                        <div className="form__formGroup_small">
                                            <Input
                                                className={styles.popup__input_time}
                                                value={formData.startTime}
                                                _size={'small'}
                                            />
                                            <Selector
                                                className={styles.popup__input_time}
                                                size={'small'}
                                                value={'AM'}
                                            />
                                        </div>

                                        <FormIconButton
                                            variant={'cross'}
                                            size={'medium'}
                                            onClick={() => dataHandler('startTime', '')}
                                        />
                                    </div>
                                ) : (
                                    <FormAddButton value={'Добавить время'} />
                                )}
                            </div>

                            <div className="field">
                                <p className="field__title">Окончание</p>

                                {formData.endTime ? (
                                    <div className="form__valueGroup">
                                        <div className="form__formGroup_small">
                                            <Input
                                                className={styles.popup__input_time}
                                                value={formData.endTime}
                                                _size={'small'}
                                            />
                                            <Selector
                                                className={styles.popup__input_time}
                                                size={'small'}
                                                value={'AM'}
                                            />
                                        </div>

                                        <FormIconButton
                                            variant={'cross'}
                                            size={'medium'}
                                            onClick={() => dataHandler('endTime', '')}
                                        />
                                    </div>
                                ) : (
                                    <FormAddButton value={'Добавить время'} />
                                )}
                            </div>
                        </div>
                    </div>

                    <hr className={styles.popup__divider} />

                    <div className={styles.popup__section}>
                        <div className="fieldBoxHeader">
                            <p>Повторение события</p>
                        </div>

                        <div className="field__buttonBox">
                            <FormAddButton value={'Добавить повторение'} />
                        </div>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter className={styles.popup__buttonGroup} p="0">
                <PopupButton variant="tinted" color="gray" onClick={onClose}>
                    Отменить
                </PopupButton>

                <PopupButton
                    variant="tinted"
                    color="blue"
                    onClick={() => {
                        alert('Created!')
                        onClose()
                    }}
                >
                    Создать
                </PopupButton>
            </ModalFooter>
        </ModalContent>
    )
}
