import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List'
import Usememo from './Components/Usememo'


function App() {
  const [number, setnumber] = useState(1)

  const [dark, setdark] = useState(false)
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]) //Second parameter of usecallback will be arrays of dependencies.It will update when the number will change.

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#333" : "#fff"
  }
  const change = ((event) => {
    setnumber(parseInt((event.target.value)))
  })
  return (
    <div>
      <span>Usecallback</span>
      <div className="App" style={theme}>
        <input
          type={"number"}
          value={number}
          onChange={change}

        />
        <button onClick={(() => setdark(prevdark => !prevdark))}>
          Toggle Theme
          <List getItems={getItems} />
        </button>
        <Usememo />
      </div>
    </div>
  )
}

export default App
