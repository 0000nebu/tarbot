import React from 'react'
import { useForm } from 'react-hook-form';
import { create } from '../services/user-service'
import { useNavigate } from "react-router-dom"
import signUpImage from '../assets/singup.png'
import './LoginPage/LoginPage.css'



  function SignUpPage() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
  
    function handleSignIn(data) {
      create(data)
        .then(() => {
          navigate('/doSomething')
        })
    }

    return (
      <div className='login-body'>
        <img className='login-image' src={signUpImage} alt="signUp-image" />
        <h1>Sign In</h1>
        <form  className='form' onSubmit={handleSubmit(handleSignIn)}>
          <div className="mb-3">

            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              {...register("name")}
            />

            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              {...register("username")}
            />


            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="mail"
              className="form-control"
              id="mail"
              {...register("mail")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="button">
            Sign Up
          </button>
        </form>

      </div>

    )
  }

  export default SignUpPage