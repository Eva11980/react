// function Child(props) {
//   return <>{props.text}</>
// }

// function Child({ cat, name, price }) {
//   // const { cat, name, price } = props

//   return (
//     <>
//       <div>分類: {cat}</div>
//       <div>名稱: {name}</div>
//       <div>定價: {price}</div>
//     </>
//   )
// }

// export default Child
//props（屬性）資料傳遞父母渲染出來的子女元件單向資料流子女元件先做結構

import { useState } from 'react'

// increment = 1 是預設傳入參數值為1的意思
function Child({ increment = 1 }) {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + increment)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default Child
