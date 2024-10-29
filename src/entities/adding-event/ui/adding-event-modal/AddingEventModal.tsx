'use client'

import { EventColor } from '@/entities/adding-event/model/eventColor'
import { ColorItem } from '@/entities/adding-event/ui/color-item/ColorItem'
import { FormAddButton } from '@/entities/adding-event/ui/form-add-button/FormAddButton'
import { FormIconButton } from '@/entities/adding-event/ui/form-icon-button/FormIconButton'
import modalStyles from '@/entities/main/ui/ModalHolder.module.scss'
import { ModalHolderContext } from '@/entities/providers/modalHolderProvider'
import { PopupButton } from '@/shared/buttons/ui/popup-button/PopupButton'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'
import { Input } from '@/shared/form/ui/input/Input'
import { Selector } from '@/shared/form/ui/selector/Selector'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import { useCallback, useContext, useEffect, useState } from 'react'
import styles from './AddingEventModal.module.scss'

type Props = {}

export function AddingEventModal({}: Props) {
    const { addingEventModal, emojiModal } = useContext(ModalHolderContext)

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

    const onSelectorEmojiClick = emojiModal.onOpen

    const onCancelButtonClick = addingEventModal.onClose
    const onCreateButtonClick = () => {
        alert('Created!')
        addingEventModal.onClose()
    }

    useEffect(() => {
        if (emojiModal.emoji === '') {
            emojiModal.setEmoji(formData.emoji)
        }
    }, [formData, emojiModal])

    useEffect(() => {
        if (emojiModal.emoji !== '') {
            dataHandler('emoji', emojiModal.emoji)
        }
    }, [emojiModal.emoji])

    return (
        <Modal
            isOpen={addingEventModal.isOpen}
            onClose={addingEventModal.onClose}
            isCentered
            blockScrollOnMount={!emojiModal.isOpen}
        >
            <ModalOverlay />

            <ModalContent className={modalStyles.modal} w="334px" sx={{ background: 'var(--gray-50)' }}>
                <ModalBody className={modalStyles.modal__body} p="8px">
                    <div>
                        <div className={modalStyles.modal__iconBox}>
                            <CalendarEvent emoji={formData.emoji} color={formData.color} size={'large'} />
                        </div>

                        <div className={modalStyles.modal__formGroup}>
                            <Input
                                placeholder={'Название'}
                                value={formData.name}
                                onChange={(e) => dataHandler('name', e.target.value)}
                            />
                            <Selector
                                className={modalStyles.modal__emojiSelector}
                                value={formData.emoji}
                                onClick={onSelectorEmojiClick}
                            />
                        </div>

                        <div className={modalStyles.modal__colorPickerGroup}>
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

                    <hr className={modalStyles.modal__divider} />

                    <div className={modalStyles.modal__sectionList}>
                        <div className={modalStyles.modal__section}>
                            <div className="fieldBoxHeader">
                                <p>Дата события</p>
                            </div>

                            <div className="fieldList">
                                <div className="field">
                                    <p className="field__title">Начало</p>

                                    {formData.startDate ? (
                                        <div className="form__valueGroup">
                                            <Input
                                                className={modalStyles.modal__input_date}
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
                                                className={modalStyles.modal__input_date}
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

                        <hr className={modalStyles.modal__divider} />

                        <div className={modalStyles.modal__section}>
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
                                                    className={modalStyles.modal__input_time}
                                                    value={formData.startTime}
                                                    _size={'small'}
                                                />
                                                <Selector
                                                    className={modalStyles.modal__input_time}
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
                                                    className={modalStyles.modal__input_time}
                                                    value={formData.endTime}
                                                    _size={'small'}
                                                />
                                                <Selector
                                                    className={modalStyles.modal__input_time}
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

                        <hr className={modalStyles.modal__divider} />

                        <div className={modalStyles.modal__section}>
                            <div className="fieldBoxHeader">
                                <p>Повторение события</p>
                            </div>

                            <div className="field__buttonBox">
                                <FormAddButton value={'Добавить повторение'} />
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter className={modalStyles.modal__buttonGroup} p="0">
                    <PopupButton variant="tinted" color="gray" onClick={onCancelButtonClick}>
                        Отменить
                    </PopupButton>

                    <PopupButton variant="tinted" color="blue" onClick={onCreateButtonClick}>
                        Создать
                    </PopupButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
