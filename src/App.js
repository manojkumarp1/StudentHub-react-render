import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import EditCourse from './components/Admin/EditCourse';
import Course from './components/Courses/course';
import Admincourse from './components/Admin/Admincourse';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Addcourse from './components/Admin/Addcourse';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';

import Calender from './components/Calendar/Calendar';
import Raiseproblem from './components/Communicationtools/Raiseproblem';
import Araiseproblem from './components/Communicationtools/Araiseproblem';
import Problemform from './components/Communicationtools/Problemform';
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
            <Route path='/courses' element={<Course/>}/>
            <Route path='/admincourses' element={<Admincourse/>}/>
            <Route path='/editcourse/:id' element={<EditCourse />}></Route>
            <Route path='/addcourse' element={<Addcourse/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/calendar' element={<Calender/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/raiseproblem' element={<Raiseproblem/>}/>
            <Route path='/araiseproblem' element={<Araiseproblem />}/>
            <Route path='/raiseproblemform' element={<Problemform />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
