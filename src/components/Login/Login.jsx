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
      navigate('/admincourses');
    } else {
      // Make an API request to the login endpoint without validation
      axios
        .post('http://localhost:8081/login', formData)
        .then((res) => {
          if (res.data.Status === 'Success') {
            const studentId = res.data.studentId;
            localStorage.setItem('studentId', studentId); // Store userId in localStorage
            setstudentId(studentId); // Store userId in component state
            console.log('Student ID:', studentId); // Log userId for users
            navigate('/courses');
            window.location.reload(); // Refresh the page
          } else {
            // If the login was not successful, navigate to the signup page
            navigate('/signup');
            alert('Invalid Credentials. Please Register');
          }
        })
        .catch((err) => console.log(err));
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
