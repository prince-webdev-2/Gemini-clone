import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './components/Main'
import Sidebar from './components/sidebar'

function App() {
  let [expand, setExpand]= useState(false);

  return (
    <div className={`h-[100vh] ${expand ? 'grid grid-cols-[70%_30%] sm:grid-cols-[40%_60%] lg:grid-cols-[20%_80%]' : 'flex'}`}>
      <Sidebar expand={expand} setExpand={setExpand} />
      <Main expand={expand} />
    </div>
  )
}

export default App
