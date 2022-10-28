import React, { useState } from 'react'

import InputById from './InputById'
import InputByRefs from './InputByRefs'

function InputDemo() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setInputText('test@gmail.com')
        }}
      >
        載入資料
      </button>

      <hr />
      {/* 可控狀態使用著操作所改變的質綁定狀態
       */}
      <h1>不可控表單元件(id)</h1>
      <InputById />
      <InputById />

      <hr />
      {/* 不可控不會有react狀態渲染出來是單純的表單元素介接第三方的參照（地址）
可以重複利用Ｃurrent */}
      <h1>不可控表單元件(ref)</h1>
      <InputByRefs />
      <InputByRefs />
    </>
  )
}

export default InputDemo
