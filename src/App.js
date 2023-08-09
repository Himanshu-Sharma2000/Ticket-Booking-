




import './App.css';
import React from 'react'
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Summary from './Components/Summary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Menu  />}/>
        <Route exact path="/summary/:showid" element={<Summary  />}/>

          {/* <Menu/> */}
          {/* <Summary /> */}
        
        </Routes>
      </Router>
    </div>
  )
}

export default App

