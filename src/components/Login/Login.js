import React from 'react'
import './Login.css'

function Login() {

    const handleSubmit = () => {

    }

  return (
    <div className='login-main'>
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit} className='login-head'>
                <div className='form-group'>
                    <label htmlFor="username">Username: </label>
                    <input type="text" />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" />
                </div>
                <div className='login-button'>Login</div>
            </form>
            <div className='login-signUp'> Not an existing user? <span>register</span> </div>
        </div>
    </div>
  )
}

export default Login