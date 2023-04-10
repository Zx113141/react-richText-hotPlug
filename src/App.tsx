import React, { useMemo } from 'react'
import { createEditor } from './core'
import './app.module.less'
function App() {
  const textOptions = {
    edit: {
      mode: '',
      disabled: false,

    },
    defaultValue: "<div style='color:red;font-size:20px;'>ddd</div>"
  }
  const XRichText = createEditor({
    edit: {
      font: ['fontSize']
    }
  })
  return (
    <div>
      <XRichText {...textOptions} ></XRichText>
    </div>
  )
}

export default App
