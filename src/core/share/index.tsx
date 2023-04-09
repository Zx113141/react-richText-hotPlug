import React, { useContext } from 'react';
import Toolbox from '../component/tools/Toolbox';
import TextContainer from '../component/editor/Textarea'
import { transformToNode } from './tranformHTML';
import { _ as lodash } from 'lodash'
import { observer, useLocalStore } from 'mobx-react-lite';
import { TextContext, ToolboxContext } from '../context/context';
import { Button } from 'antd';

export const createEditor: any = (toolOptions: any) => {
    const selectText = (value: string) => {

    }
    const inputText = (value: string) => {

        // console.log(transformToNode(value))
    }
    
    const setColor = () => {
        document.execCommand('fontSize', true, '3px');
    }
    return observer(function TextProvider(props) {
        // 注册Tools工具，依赖收集，根据toolOptions创建字段，监听第三方库字段
        const options = lodash.cloneDeep(toolOptions)
        // console.log(options)
        const tools = useLocalStore(() => {
            return {
                options,
                get getOptions() {
                    return options
                },
                handleOptions(key:string,value:any,partten?:string) {
                    // if (partten) {
                    //     for (let key)
                    // }
                }
            }
        })
        return (

            <ToolboxContext.Provider value={tools}>
                <Toolbox tools={toolOptions}>
                    <TextContext.Provider value={null}>
                        <TextContainer {...props} onSelect={(val: string) => selectText(val)} onInput={(value: string) => inputText(value)}>

                        </TextContainer>
                    </TextContext.Provider>
                </Toolbox>
            </ToolboxContext.Provider>

        )
    })
}

