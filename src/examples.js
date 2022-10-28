// 1026
import JsxValue from './ex-1026-1jsx/JsxValue'
import Counter from './ex-1025-2/Counter'
import StudentList from './ex-1026-2jsx-array-map/StudentList'
import Demo from './ex-1026-3集中範例用App元件/Demo'
import Menu from './practice-1/Menu'
// 1027
import Parent from './ex-1027-1props-基礎範例/Parent'

//export default的話.可以再導入（import）時直接改改名
import ParentPropTypes from './ex-1027-2props-PropTypes/Parent'
import ParentDataFlow from './ex-1027-3props-三種資料流/Parent'

// 1028
import InputDemo from './ex-1028-1:2不可控表單元件與refs/InputDemo'
import HTML5Form from './ex-1028-2:4各種可控的表單元件-radio/HTML5Form'

export const examples = [
  {
    name: '1028-2 各種可控的表單元件',
    path: '/ex-1028-2/HTML5Form.js',
    component: HTML5Form,
  },

  {
    name: '1028-1 可控與不可控表單元件',
    path: '/ex-1028-1/InputDemo.js',
    component: InputDemo,
  },
  {
    name: '1027-3 三種資料流',
    path: '/ex-1027-3/Parent.js',
    component: ParentDataFlow,
  },
  {
    name: '1027-2 PropTypes',
    path: '/ex-1027-2/Parent.js',
    component: ParentPropTypes,
  },
  {
    name: '1027-1 props屬性',
    path: '/ex-1027-1/Parent.js',
    component: Parent,
  },
  {
    name: '1026 練習題-選單項目狀態',
    path: '/practice-1/Menu.js',
    component: Menu,
  },
  {
    name: '1026-3 物件陣列狀態處理練習',
    path: '/ex-1026-3/Demo.js',
    component: Demo,
  },

  {
    name: '1026-2 學生列表清單(map與key)',
    path: '/ex-1026-2/StudentList.js',
    component: StudentList,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: '/ex-1026-1/JsxValue.js',
    component: JsxValue,
  },
  {
    name: '1025-1 計數器',
    path: './ex-1025-2/Counter',
    component: Counter,
  },
  {
    name: '1026-1 JSX中的值與表達式',
    path: './ex-1026-1/JsxValue',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單(map-key)',
    path: './ex-1026-2/StudentList',
    component: StudentList,
  },
]
