import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/user-service';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/user-context';
import { Navigate } from 'react-router-dom';
import loginImage from '../../assets/login.png'
import './LoginPage.css'

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { onLogin, user } = useAuthContext();
  
  const navigate = useNavigate(); 
  function handleLogin(data) {
    login(data)
      .then((user) => onLogin(user));
  } //navigate

  if (user) {
    return <Navigate to="/doSomething" />;
  }

  return (
    <div className='login-body'>
      <img className='login-image' src={loginImage} alt="login-image" />
      <h1>Login</h1> 
      <form className='form' onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
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
            id="exampleInputPassword"
          />
        </div>

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
