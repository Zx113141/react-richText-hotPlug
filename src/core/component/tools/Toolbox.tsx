import Font from '../../tools/fontsize'
import React, { ReactElement, useContext, useRef } from 'react';
import { install } from '@/core/share/install';
import { observer } from 'mobx-react-lite';
import { TextContext } from '@/core/context/context';
import { useEffect } from 'react';
interface toolsProps {
    tools?: any
    children: JSX.Element | ReactElement
}


const Toolbox = (props: toolsProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { tools, children } = props
    // 获取上下文selected 和 全局文本
    const text = useContext(TextContext)
    const range = text.textRange
    // 根据tools 进行组件注册
    const ToolElement = install(tools)
    // 组件方法, 统一修改
    const change = (type: string, value: any) => {
        
    }
    useEffect(() => {
        ref.current?.addEventListener('click', (e) => {
            text.editorRef && text.editorRef.focus()
        }, true)
    }, [])

    // 获取TextEditor的焦点

    // 热插拔Tools
    return (
        <>
            <div style={{ marginBottom: 200 }} ref={ref}>
                <ToolElement change={(type: string, value: any) => change(type, value)}></ToolElement>

            </div>
            {children}
        </>
    )
}


export default observer(Toolbox)