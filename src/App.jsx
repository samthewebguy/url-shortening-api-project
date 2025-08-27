import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
