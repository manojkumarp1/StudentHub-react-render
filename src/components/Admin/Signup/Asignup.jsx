import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Asignup() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFormData = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^.{8,}$/;
        const usernamePattern = /^[a-zA-Z0-9]{3,}$/; // alpha-numeric characters
        const mobileNumberPattern = /^[0-9]{10}$/;

        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email should not be empty";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            newErrors.password = "Password should not be empty";
        } else if (!passwordPattern.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Password should not be empty";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Confirm Password didn't match";
        }

        if (!formData.firstname) {
            newErrors.firstname = "First Name should not be empty";
        }

        if (!formData.lastname) {
            newErrors.lastname = "Last Name should not be empty";
        }

        if (!formData.dob) {
            newErrors.dob = "Date of Birth should not be empty";
        }

        if (!formData.phone) {
            newErrors.phone = "Phone Number should not be empty";
        } else if (!mobileNumberPattern.test(formData.phone)) {
            newErrors.phone = "Invalid Mobile Number format";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateFormData()){
            axios.post('http://localhost:8081/adminsignup',formData)
            .then(res=>{
                navigate("/adminlogin");
            })
            .catch(err=>console.log(err));
        
    }
};


 return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name <span className="required">*</span></label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder='Enter firstname'
                        required
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder='Enter lastname'
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth <span className="required">*</span></label>
                    <input
                        type="text"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        placeholder='Enter Date of Birth'
                        required
                    />
                    {errors.dob && <p className="error">{errors.dob}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter email'
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Contact No <span className="required">*</span></label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Enter phone number'
                        required
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder='Enter password'
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder='Confirm Password'
                        required
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" id="signup1" className="btn btn-primary">Signup</button>
                <Link to='/login' type='button' id='loginButton' className="btn btn-primary">
                    Login
                </Link>
            </form>
        </div>
    );
}

export default Asignup;
