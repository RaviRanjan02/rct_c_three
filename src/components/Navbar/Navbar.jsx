import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";


const Navbar = () => {
  
  const {isAuth ,logout,login}=useContext(AuthContext)
  
  const navigate = useNavigate();

  const handleLoggedIn=()=>{
    
    if(isAuth){
      logout()
      navigate("/")
    }else{
      navigate("/login")
    }
    
    
  }
  
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count"></span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoggedIn}>{isAuth ? "logout":"login"}
    </button>
    </div>
  );
};

export default Navbar;
