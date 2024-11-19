import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import { useAuth } from '../store/Auth'
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/login"

const Login = () => {
  const [user, setUser] = useState({
    email : "",
    password : "",
  })
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name] : value,
    })
    }
    const navigate = useNavigate ();
    const { storeTokenInLS } = useAuth();

    
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',  
          },
          body: JSON.stringify(user),
        });
        console.log(response);
        const res_data = await response.json();
        if (response.ok) {
          toast.success("Login Successful");
         
          storeTokenInLS(res_data.token);
          // localStorage.setItem("token",res_data.token);
          setUser({ email: "", password: "" });
          navigate("/");
        } else {
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message );
        }
      } catch (error) {
        console.log("Error during login:", error);
      }
    };
    
  return (
   <>
    <main>
      <div className="section-login">
        <div className="container grid grid-two-cols">
          <div className="login-image">
            <img src="/images/login.png" alt='login png'/>
          </div>
          <div className="login-form">
            <h1 className='main-heading mb-3'>Login Form</h1>
            <br/>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email'>email</label>
                <input 
                type='email' 
                name='email'
                placeholder='Enter your email'
                required
                autoComplete='off'
                value={user.email}
                onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor='password'>password</label>
                <input 
                type='password' 
                name='password'
                placeholder='Enter your password'
                required
                autoComplete='off'
                value={user.password}
                onChange={handleInput}
                />
              </div>
              <br/>
              <button type='submit'className='btn btn-submit'>Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
   </>
  )
}

export default Login