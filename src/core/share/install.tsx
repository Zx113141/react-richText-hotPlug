import { list } from "../tools"
export const install = (options: any) => {
    let components: any = []
    for (let key in list) {
        if (list[key].tags in options) {
            let tag = list[key].tags
            if (list[key].name in options[tag]) {
                components.push(list[key])
            }
        }
    }
    return function ToolComponenst(props:any) {
        return (
            <>
                {
                    components.map((Item, index:number) => {
                        return (
                            <Item.comp key={index + Item.name} {...props} type={Item.key}></Item.comp>
                        )
                    })
                }
            </>
        )
    }
}

export const nativeInstall = (obj: any) => {
    
}