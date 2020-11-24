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

      <Button size={ButtonSizes.lg}>Hello</Button>
      <Button size={ButtonSizes.md}>Hello</Button>
      <Button size={ButtonSizes.sm}>Hello</Button>
    </div>
  )
}

export default App
