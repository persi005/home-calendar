'use client'

import { ModalHolderProvider } from '@/entities/providers/modalHolderProvider'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ModalHolderProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </ModalHolderProvider>
    )
}
