import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List'


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

    </div>
  )
}

export default App
