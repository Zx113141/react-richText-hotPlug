export const debounce = function (fn: () => void, delay: number, flag?: boolean) {

    let timer: ReturnType<typeof setTimeout> | null = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        } else {
            timer = setTimeout(function () {
                fn()
            }, delay)
        }

    }

}