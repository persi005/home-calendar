'use client'

import styles from '@/entities/adding-event/ui/form-icon-button/FormIconButton.module.scss'
import Image from 'next/image'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size: 'small' | 'medium'
    variant: 'add' | 'cross'
}

export function FormIconButton({ size, variant, ...props }: Props) {
    return (
        <button className={styles.button} data-size={size} data-variant={variant} {...props}>
            {variant === 'add' ? (
                <Image src={'/icons/symbol/plus-bold.svg'} width={20} height={20} alt={'Plus icon'} />
            ) : (
                <Image src={'/icons/symbol/cross-bold.svg'} width={20} height={20} alt={'Cross icon'} />
            )}
        </button>
    )
}
