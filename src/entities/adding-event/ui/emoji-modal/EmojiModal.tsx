'use client'

import { ModalHolderContext } from '@/entities/providers/modalHolderProvider'
import { Modal, ModalBody, ModalContent } from '@chakra-ui/react'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { useContext } from 'react'
import styles from './EmojiModal.module.scss'

type Props = {}

export function EmojiModal({}: Props) {
    const { emojiModal } = useContext(ModalHolderContext)

    const onEmojiClick = (emojiData: EmojiClickData) => {
        emojiModal.setEmoji(emojiData.emoji)
        emojiModal.onClose()
    }

    return (
        <Modal isOpen={emojiModal.isOpen} onClose={emojiModal.onClose} scrollBehavior={'inside'} blockScrollOnMount>
            <ModalContent w={'max-content'}>
                <ModalBody p="0">
                    <EmojiPicker onEmojiClick={onEmojiClick} lazyLoadEmojis />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
