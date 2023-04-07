

export const observe = (obj) => {
    const proxy = new Proxy(obj, {
        get: (target, p,receiver) => {
            console.log(target, p,receiver)
        },
        set: (target, p,newValue,receiver) => {
            console.log(target, p,newValue,receiver)
            return true
        }
    })
    return proxy
}