import Font from '../../tools/fontsize'
import React, { ReactElement, useContext, useCallback } from 'react';
import { install } from '@/core/share/install';


interface toolsProps {
    tools?: any
    children: JSX.Element | ReactElement
}


const Toolbox = (props: toolsProps) => {
    const { tools, children } = props
    // 根据tools 进行组件注册
    const ToolElement = install(tools)
    // 组件方法, 统一修改
    const change = (type: string, value: any) => {
        document.execCommand('color',false, 'font-size:20px')
    }
    // 获取TextEditor的焦点

    // 热插拔Tools
    return (
        <>
            <div style={{marginBottom:100}}>
                <ToolElement change={(type: string, value: any) => change(type, value)}></ToolElement>
            </div>
            {children}
        </>
    )
}


export default (Toolbox)