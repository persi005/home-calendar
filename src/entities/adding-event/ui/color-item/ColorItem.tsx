'use client'

import styles from '@/entities/adding-event/ui/color-item/ColorItem.module.scss'
import { useEffect, useRef } from 'react'

type Props = {
    color: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'pink'
    selected?: boolean
}

export function ColorItem({ color, selected = false }: Props) {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        ref.current?.toggleAttribute('data-selected', selected)
    })

    return <button ref={ref} className={styles.color} data-color={color}></button>
}
