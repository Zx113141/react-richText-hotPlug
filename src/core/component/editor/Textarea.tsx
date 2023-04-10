import { useEffect, useState, useRef, useContext } from 'react';
import styles from './index.module.less'
import { TextContext } from '@/core/context/context';
import { Observer,observer } from 'mobx-react-lite';
const TextContainer = (props) => {
    const { disabled, defaultValue} = props
    const text = useContext(TextContext)
    const ref = useRef<HTMLDivElement>()
    const offset = 10
    let isMoveing = false
    let moveCoord:number[] = []
    useEffect(() => {
        ref.current?.addEventListener('mouseup', () => {
            if (isMoveing) {
                const selection = window.getSelection() as Selection
                text.updateSelected(selection)
            }
            isMoveing = false
        })
        ref.current?.addEventListener('mousedown', (e) => {
            moveCoord = [e.offsetX, e.offsetY]
        })
        ref.current?.addEventListener('mousemove', (e) => {
            if (!isMoveing) {
                if ((Math.abs(e.offsetX - moveCoord[0])) > offset || Math.abs(e.offsetY - moveCoord[1]) > offset) {
                    isMoveing = true
                }
            }
   
        })
        text.setEditorRef(ref.current)
    }, [])
    const input = (e) => {
        text.updateTextContent(e.target)
    }
    return (
        <div className={styles.container}>

            <div ref={ref}
                className={styles.editor}
                id=""
                onInput={(e) => input(e)}
                contentEditable={!disabled}
                style={{ fontSize: 16 }}
            >
                {
                    defaultValue
                }
            </div>
        </div>
    )
}


export default observer(TextContainer)