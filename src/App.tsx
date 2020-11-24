import React from 'react'
import Button, { ButtonTypes, ButtonSizes } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button disabled>Hello</Button>
      <Button disabled btnType={ButtonTypes.primary}>
        Hello
      </Button>
      <Button href="https://www.baidu.com" disabled btnType={ButtonTypes.link}>
        百度 link
      </Button>
      <Button disabled btnType={ButtonTypes.danger}>
        Hello
      </Button>

      <Button onClick={(e)=>{alert(1)}} size={ButtonSizes.lg}>点击</Button>
      <Button autoFocus size={ButtonSizes.md}>autoFocus</Button>
      <Button size={ButtonSizes.sm}>Hello</Button>
    </div>
  )
}

export default App
