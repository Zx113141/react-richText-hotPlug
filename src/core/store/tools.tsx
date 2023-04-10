
import {useLocalStore, observer} from 'mobx-react-lite';
import { ToolboxContext } from '../context/context';
interface textStoreProps {
    selectedText:null | HTMLSelectElement,

}


const Tools = observer((props:any) => {
    
    const toolsStore = useLocalStore<textStoreProps>(() => (
        {
            selectedText:null,
        }
    ))
    return (
        <ToolboxContext.Provider value={toolsStore}>
            {props.children}
        </ToolboxContext.Provider>
    )
})

export default Tools