import Font from '../../tools/fontsize'
import React, { ReactElement, useContext, useCallback } from 'react';
import { install } from '@/core/share/install';
import { observe } from '@/core/share/observe';
import { dispatchToolsValue } from '@/core/share/dispatch';
import { globalContext } from '../../context/context';


interface toolsProps {
    tools?: any
    children: JSX.Element | ReactElement
}


const Toolbox = (props: toolsProps) => {

    const { tools, children } = props
    const global = useContext(globalContext)
    // 根据tools 进行组件注册
    const ToolElement = install(tools)
    // 组件方法, 依赖收集
    const change = (type: string, value: any) => {
        console.log(global)
        dispatchToolsValue({
            type,
            value,
            isGlobal: global.isGlobalSelect
        })
    }


    // 热插拔Tools
    return (
        <>
            <div>
                <ToolElement change={(type: string, value: any) => change(type, value)}></ToolElement>
            </div>
            {children}
        </>
    )
}


export default Toolbox