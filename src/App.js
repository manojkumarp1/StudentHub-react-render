import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

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
            <Route path='/courses' element={<Home/>}/>
            <Route path='/resources' element={<Home/>}/>
            <Route path='/tools' element={<Home/>}/>


          </Routes>
        </div>

      </div>
    </Router>
    
  );
}

export default App;
