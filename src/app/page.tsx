import { Temporal } from '@js-temporal/polyfill'
import PlusSvg from '/public/icons/symbol/plus.svg'
import styles from './page.module.scss'
import { TextDivider } from '@/entities/sidebar/ui/TextDivider/TextDivider'
import { CalendarEvent } from '@/shared/calendar-event/ui/CalendarEvent/CalendarEvent'

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

                <div className={styles.sidebar__content}>
                    <TextDivider title={'Test'} />
                    <CalendarEvent emoji="🏀" color="red" />
                    <TextDivider title={'Test'} />
                    <CalendarEvent emoji="🏀" color="red" time={Temporal.Now.instant().toString()} />
                    <TextDivider title={'Test'} />
                    <CalendarEvent emoji="🏀" color="red" time={Temporal.Now.instant().toString()} isHour12={true} />
                </div>
            </div>

            <div className={styles.content}></div>
        </div>
    )
}
