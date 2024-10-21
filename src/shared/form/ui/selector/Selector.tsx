'use client'

import styles from '@/shared/form/ui/selector/Selector.module.scss'
import { cn } from '@/shared/lib/utils/cn'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react'
import ArrowSelectorSvg from '/public/icons/symbol/arrow-select.svg'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    placeholder?: string
    value?: string
    size?: 'small' | 'medium'
}

export function Selector({ className, value = '', placeholder = '', size = 'medium', ...props }: Props) {
    const selector = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (selector.current) {
            selector.current.toggleAttribute('data-placeholder', !value)
        }
    }, [value])

    return (
        <div ref={selector} className={cn(styles.selector, className)} data-size={size} {...props}>
            {value || placeholder}
            <ArrowSelectorSvg />
        </div>
    )
}
