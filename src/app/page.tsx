import PlusSvg from '../../public/icons/symbol/plus.svg'
import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarHeader__titleBox}>
                        <p className={styles.sidebarHeader__title}>События</p>
                    </div>

                    <div className={styles.sidebarHeader__buttonGroup}>
                        <button className={styles.sidebarHeader__button}>
                            <PlusSvg />
                        </button>
                    </div>
                </div>

                <div className={styles.sidebar__content}></div>
            </div>

            <div className={styles.content}></div>
        </div>
    )
}
