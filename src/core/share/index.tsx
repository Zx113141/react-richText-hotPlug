
import Toolbox from '../component/tools/Toolbox';
import TextContainer from '../component/editor/Textarea'
import { _ as lodash } from 'lodash'
import { observer, useLocalStore } from 'mobx-react-lite';
import Text from '../store/text';
import Tools from '../store/tools';
import { transformToNode } from './tranformToReactElement';


export const createEditor: any = (toolOptions: any) => {
    const inputText = (value: string) => {

        // console.log(transformToNode(value))
    }
    return observer(function TextProvider(props:any) {
        // 注册Tools工具，依赖收集，根据toolOptions创建字段，监听第三方库字段
        const options = lodash.cloneDeep(toolOptions)
        const defaultValue = transformToNode(props.defaultValue)
        // 编译props内部默认值再传入编辑器
        const tools = useLocalStore(() => {
            return {
                options,
                get getOptions() {
                    return options
                },
                handleOptions(key: string, value: any, partten?: string) {
                    // if (partten) {
                    //     for (let key)
                    // }
                }
            }
        })
        return (
            <Text>
                <Tools >
                    <Toolbox tools={toolOptions}>
                        <TextContainer  {...props.edit} defaultValue={defaultValue}>

                        </TextContainer>
                    </Toolbox>
                </Tools>
            </Text>


        )
    })
}

