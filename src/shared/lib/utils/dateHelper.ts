import { Temporal } from '@js-temporal/polyfill'

export class DateHelper {
    static #cache = new Map()

    // static GetToday() {
    //     return Temporal.
    // }

    static GetDetails(date: string): IGetDetails {
        if (this.#cache.has(date)) {
            return this.#cache.get(date)
        }

        const instant = Temporal.PlainDateTime.from(date)
        const str = instant.toString({ smallestUnit: 'minute' })
        const time = str.split('T').at(1)?.slice(0, -1)
        const timeWithPeriod = instant.toLocaleString('en-us', {
            hour: 'numeric',
            minute: 'numeric',
        })
        const periodTime = timeWithPeriod.slice(0, -2)
        const period = timeWithPeriod.slice(-2)
        const obj = {
            day: instant.day,
            month: instant.month,
            year: instant.year,
            time,
            periodTime,
            period,
        }

        this.#cache.set(date, obj)
        return obj
    }
}

interface IGetDetails {
    day: number
    month: number
    year: number
    time: string | undefined
    periodTime: string | undefined
    period: string | undefined
}
