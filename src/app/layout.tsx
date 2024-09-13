import type { Metadata } from 'next'
import { golosText, inter } from '@/app/fonts'
import './globals.scss'
import { cn } from '@/shared/lib/utils/cn'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn(golosText.variable, inter.variable)}>{children}</body>
        </html>
    )
}
