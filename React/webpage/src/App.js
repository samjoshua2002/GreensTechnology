import React from 'react'//rfce
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Validation from './Validation'


//add links here

function App() {
  //add javascripts heree
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/validation' element={<Validation/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App