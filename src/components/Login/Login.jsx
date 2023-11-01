import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [studentId, setstudentId] = useState(null);

  const handleInput = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      localStorage.setItem('authenticatedUser', false);
      localStorage.setItem('authenticatedAdmin', true);
      navigate('/admincourses');
    } else {
      localStorage.setItem('authenticatedUser', true);
      localStorage.setItem('authenticatedAdmin', false);
      // Make an API request to the login endpoint without validation
      axios.post('http://localhost:8081/login', formData)
        .then((res) => {
          if (res.data.Status === 'Success') {
            const studentId = res.data.studentId;
            localStorage.setItem('studentId', studentId); // Store userId in localStorage
            setstudentId(studentId); 
            navigate('/courses');
            window.location.reload(); // Refresh the page
          } else {
            navigate('/signup');
          }
        })
        .catch((err) =>{
          if(err){
            alert("Invalid Credentials. Please Register"); // Handle 401 status
            navigate('/signup');
            console.log(err)
          }
        })
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleInput}
            required // Add required attribute
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleInput}
            required // Add required attribute
            className="form-control"
          />
        </div>
        <div className='login-signup-btns'>
          <button type="submit" className="btn btn-primary" id="login">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="btn btn-secondary" id="signup">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
