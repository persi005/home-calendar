'use client'

import styles from '@/shared/form/ui/selector/Selector.module.scss'
import { cn } from '@/shared/lib/utils/cn'
import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef } from 'react'

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
            <Image src={'/icons/symbol/arrow-select.svg'} width={20} height={20} alt={'Arrow select icon'} />
        </div>
    )
}
