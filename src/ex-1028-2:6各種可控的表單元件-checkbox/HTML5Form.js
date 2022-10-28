import React, { Fragment, useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  // single checkbox
  const [agree, setAgree] = useState(false)

  // radio group
  // 記錄使用者選了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select
  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '金魚']

  //checkbox group
  const [likeList, setLikeList] = useState(['芒果', '蘋果'])
  const fruitOptions = ['芒果', '蘋果', '香蕉']

  return (
    <>
      <h1>文字輸入框(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />
      <h1>核取方塊(checkbox single)</h1>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
        // 是一個物件質 是react內建 Checks  box複選會員註冊一般來說都是一整組使用Checks  box單一個使用布林質 Costs [agree.setArgge]
      />
      <label>我同意會員註冊條款</label>
      {/* 多選項只選一個表單元素建議都要給名字群組不同呈現方式有沒有選中要看checked的質有選擇是Ｔ沒選中Ｆ對開發者選的是什麼質不是ＴＦ  */}
      {/* ---------------------------------------------------------- */}
      <h1>選項按鈕群組(radio group)</h1>
      {genderOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              checked={gender === v}
              value={v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
              // //constp[Gender,]做個布林的判斷On Change Dry原則把所有選項變成一個陣列,再map出來div包起來要加key靜態得狀態（動態不可以
            />
            <label>{v}</label>
          </div>
        )
      })}
      <h1>下拉清單(select)</h1>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {petOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      {/* ---------------------------------------------------------- */}
      <h1>核取方塊群組(checkbox group)</h1>
      {/* 核取方塊群組三步驟 拷貝 陣列 回狀態 */}
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={likeList.includes(v)}
              value={v}
              onChange={(e) => {
                const value = e.target.value

                if (likeList.includes(value)) {
                  // 如果此項目值在state陣列中 -> 移出state陣列
                  const newLikeList = likeList.filter((v2, i2) => v2 !== value)
                  setLikeList(newLikeList)
                } else {
                  // 如果不在此state陣列中 -> 加到state陣列中
                  const newLikeList = [...likeList, value]

                  //加入時,限制最大數量
                  if (newLikeList.length > 2) {
                    alert('最多選2樣')
                    return
                  }
                  setLikeList(newLikeList)
                }
                // 用filter先過濾先建立然後做修改狀態是陣列或是物件較難處理
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}

export default HTML5Form
