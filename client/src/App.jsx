import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './components/Main'
import Sidebar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[100vh] w-full flex'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
