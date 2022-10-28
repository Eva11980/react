import { useRef } from 'react'

function InputByRefs() {
  //{ current: null }
  const inputRef = useRef(null)

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}
// 地圖元件要吃動元素id要重複使用圖表要用Ref

//Ref-props不屬於屬性 是同一格階層Key不能傳 Refs 需要特別的forWard api才能傳送
//內部指派一個ＩＤ不會衝突
export default InputByRefs
