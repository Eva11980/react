import Child from './Child'

function Parent() {
  return (
    <>
      {/* <Child text="今天開始學React!" /> */}
      {/* <Child cat="手機" name="iphone" price={199} /> */}
      {/* <Child increment={2} />
      <Child increment={5} />
      <Child /> */}
      <Child firstName="pinwei" lastName="Manson" />
    </>
  )
}

export default Parent
