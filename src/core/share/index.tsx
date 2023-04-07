import React, { useContext, createContext } from 'react';
import Toolbox from '../component/tools/Toolbox';
import TextContainer from '../component/editor/Textarea'
import { transformToNode } from './tranformHTML';
import { observe } from './observe';
import { useState } from 'react';
import { TextContext,ToolboxContext } from '../context/context';

export const createEditor: any = (toolOptions: any) => {
    const [global, setGlobal] = useState({isGlobalSelect:false})
    const selectText = (value: string) => {
        
    }
    const inputText = (value: string) => {

        // console.log(transformToNode(value))
    }
    function TextProvider(props) {
        return (
            <TextContext.Provider value={{ ...props, ...toolOptions }}>
                <ToolboxContext.Provider value={global}>
                    {/* <Transform></Transform> */}
                    <Toolbox tools={toolOptions}>
                        <TextContainer {...props} onSelect={(val: string) => selectText(val)} onInput={(value: string) => inputText(value)}>

                        </TextContainer>
                    </Toolbox>
                </ToolboxContext.Provider>
            </TextContext.Provider>
        )
    }
    return TextProvider
}

