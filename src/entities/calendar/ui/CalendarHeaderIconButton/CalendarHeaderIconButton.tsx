'use client'

import styles from '@/entities/calendar/ui/CalendarHeaderIconButton/CalendarHeaderIconButton.module.scss'
import Image from 'next/image'

type Props = {
    iconPath: string
    alt: string
}

export function CalendarHeaderIconButton({ iconPath, alt }: Props) {
    return (
        <button className={styles.button}>
            <Image src={iconPath} width={20} height={20} alt={alt} />
        </button>
    )
}
