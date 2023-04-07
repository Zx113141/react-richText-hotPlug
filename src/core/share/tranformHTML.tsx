import { CSSProperties } from "react"

interface NodeProps {
    type:string,
    innerText:string
    parent:string
    className:string
    isGroup:boolean
    style:CSSProperties,
    children:NodeProps[],
}
const data = {
    type:'div',
    innerText:'',
    parent:'',
    className:'',
    isGroup:'',
    style:{

    },
    children:[
        {

        }
    ],
}

export const transformToNode = (nodeStr:string,selectText?:string) => {
    return data 
}


export const transformToString = (node:HTMLElement) => {

}

// const Transform = (props) => {
//     const {nodeStr} = props
//     console.log(nodeStr)
//     document.createElement(nodeStr)
//     return (
//         <>
            
//         </>
//     )
// }

// export default Transform
// defalut Data
