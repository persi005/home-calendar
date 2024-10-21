'use client'

import styles from '@/entities/adding-event/ui/form-icon-button/FormIconButton.module.scss'
import CrossBoldSvg from '/public/icons/symbol/cross-bold.svg'
import PlusBoldSvg from '/public/icons/symbol/plus-bold.svg'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size: 'small' | 'medium'
    variant: 'add' | 'cross'
}

export function FormIconButton({ size, variant, ...props }: Props) {
    return (
        <button className={styles.button} data-size={size} data-variant={variant} {...props}>
            {variant === 'add' ? <PlusBoldSvg /> : <CrossBoldSvg />}
        </button>
    )
}
