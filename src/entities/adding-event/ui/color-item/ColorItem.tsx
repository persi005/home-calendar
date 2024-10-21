'use client'

import { EventColor } from '@/entities/adding-event/model/eventColor'
import styles from '@/entities/adding-event/ui/color-item/ColorItem.module.scss'
import { useEffect, useRef } from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    color: EventColor
    selected?: boolean
}

export function ColorItem({ color, selected = false, ...props }: Props) {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        ref.current?.toggleAttribute('data-selected', selected)
    })

    return <button ref={ref} className={styles.color} data-color={color} {...props}></button>
}
