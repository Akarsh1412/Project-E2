import React, { useState, useEffect } from 'react';

function Login () {
    return (
        <div>
            <div className="nav login">
                <div className="nav-links">
                    <a href="/login" >Login</a>
                    <a href="/sign-up" >Sign Up</a>    
                </div>  
            </div>
            <div className='login-container'>
                <form className='login-form' method=''>
                    <h1>Login</h1>
                    <label>Login as</label>
                    <select name='name' className='login-button lgnbtn'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input className='login-input' type='email' name='email' placeholder='Email'></input>
                    <input className='login-input' type='password' name='password' placeholder='Password'></input>
                    <a className='forgot-password' href=''>Forgot password ?</a>
                    <input className='login-button' type='submit' value="Login"></input>
                </form>
            </div>
        </div>
    );
}

export default Login; 