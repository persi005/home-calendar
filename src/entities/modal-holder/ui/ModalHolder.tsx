'use client'

import { AddingEventModal } from '@/entities/adding-event/ui/adding-event-modal/AddingEventModal'
import { EmojiModal } from '@/entities/adding-event/ui/emoji-modal/EmojiModal'
// import styles from './ModalHolder.module.scss'

export function ModalHolder() {
    return (
        <>
            <AddingEventModal />
            <EmojiModal />
        </>
    )
}
