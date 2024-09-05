type CnArgs = string | undefined | null

export function cn(...args: CnArgs[]) {
    return args.filter(Boolean).join(' ')
}
