
import {useLocalStore, observer} from 'mobx-react-lite';
import { TextContext } from '../context/context';
interface textStoreProps {
    textRange:null | HTMLSelectElement,
    textContent:null | HTMLElement,
    editorRef:HTMLElement | null
}


const Text = observer((props:any) => {
    
    const textStore = useLocalStore<textStoreProps>(() => (
        {
            textRange:null,
            textContent:null,
            editorRef:null,
            range:0,
            get getTextRange() {
                return textStore.textRange
            },
            get getTextContent() {
                return textStore.textContent
            },
            get getEditorRef() {
                return textStore.editorRef
            },
            updateSelected (select:null | HTMLSelectElement) {
                textStore.textRange = select
            },
            updateTextContent(content:HTMLElement | null) {
                textStore.textContent = content
            },
            setEditorRef (ref: HTMLElement) {
                textStore.editorRef = ref
            }
        }
    ))
    return (
        <TextContext.Provider value={textStore}>
            {props.children}
        </TextContext.Provider>
    )
})

export default Text