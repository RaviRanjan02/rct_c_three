import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  
  const [loginCre ,setLoginCre] = useState({});

  const {login} = useContext(AuthContext)

  const handleChange=(e)=>{
    const {name,value} = e.target;

    setLoginCre({
      ...loginCre,
      [name]:value,
    })
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    login();
  
  }
  
return (
    <div>
      login
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" name="email" onChange={handleChange}/>
      <input data-cy="login-password" name="password" onChange={handleChange}/>
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
