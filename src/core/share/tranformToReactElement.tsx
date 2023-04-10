import { CSSProperties } from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
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
    // 解析html标签，style
    // const html = '<div>Example HTML string</div>';
    return ReactHtmlParser(nodeStr + '<span></span>') 
}
