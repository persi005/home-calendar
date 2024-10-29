'use client'

import { useDisclosure } from '@chakra-ui/react'
import { createContext, useState } from 'react'

export const ModalHolderContext = createContext({
    addingEventModal: {
        isOpen: true,
        onOpen: () => {},
        onClose: () => {},
    },
    emojiModal: {
        isOpen: true,
        onOpen: () => {},
        onClose: () => {},
        emoji: '',
        setEmoji: (value: string) => {},
    },
})

export function ModalHolderProvider({ children }: { children: React.ReactNode }) {
    const [emoji, setEmoji] = useState<string>('')
    const addingEventModal = useDisclosure()
    const emojiModal = useDisclosure()

    return (
        <ModalHolderContext.Provider value={{ addingEventModal, emojiModal: { ...emojiModal, emoji, setEmoji } }}>
            {children}
        </ModalHolderContext.Provider>
    )
}
