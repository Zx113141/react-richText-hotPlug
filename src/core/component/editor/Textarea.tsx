import { useEffect, useState, useRef } from 'react';
import styles from './index.module.less'


const TextContainer = (props) => {
    const { disabled } = props.edit
    const {onSelect,onInput} = props
    const [value, setValue] = useState('ddd')
    const ref = useRef<HTMLDivElement>()
    useEffect(() => {
        ref.current?.addEventListener('mouseup', () => {
            const selection = window.getSelection() as Selection
            onSelect(selection.toString())
        })
    }, [])
    const input = (e) => {
        onInput(e.target.innerHTML)
    }
    return (
        <div>

            <div ref={ref}
                className={styles.editor}
                id=""
                onInput={(e) => input(e)}
                contentEditable={!disabled}
            >
                
            </div>
        </div>
    )
}


export default TextContainer