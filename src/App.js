import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css'

function App() {

  return (
    <Router>
      <div className='app-main'>
        <div className='app-nav'>
          <Navbar/>
        </div>
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>

          </Routes>
        </div>

      </div>
    </Router>
    
  );
}

export default App;
