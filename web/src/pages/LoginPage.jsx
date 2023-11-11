import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../services/user-service';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/user-context';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { onLogin, user } = useAuthContext();
  
  const navigate = useNavigate(); 
  function handleLogin(data) {
    login(data)
      .then((user) => onLogin(user));
  } //navigate

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
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

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
