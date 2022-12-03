import React from "react";
import LoginButton from "./LoginButton"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const renderButton = () => {
    if (isAuthenticated) {
      return <LogoutButton className="button"/>
    }
    return <LoginButton className="button"/>
  }

  return (
    <nav className='navigation-bar'>
        <h1>
          <a href='/'>My e-shop</a>

        </h1>


      {renderButton()}
    </nav>
  )
}

export default NavigationBar;

