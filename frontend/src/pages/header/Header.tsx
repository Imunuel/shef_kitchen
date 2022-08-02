import React, { useEffect } from "react";
import "./Header.css"
import logo from "../../pages/Screenshot_1.png"
import { NavLink } from "react-router-dom";
import cookie from "cookiejs";

export function Header(){
    const LogOut = () => {
        cookie.remove('username')
        document.location.reload()
      }
    
    const username = cookie.get("username")
    return (
        <>
            <div className="Header">
                <div className="header_item"><NavLink to='/shef/favorite'>favorite</NavLink></div>
                <div className="header_item"><NavLink to='/shef/top'>top</NavLink></div>
                <NavLink to="/shef"><img src={logo} alt="" className="logo" /></NavLink>
                <div className="header_item"><NavLink to='/shef/menu'>menu</NavLink></div>

                <div className="dropdawn">
                <div className="dropdown">
                  <button className="header_item selector">profile</button>
                  <div className="dropdown-content">
                    <NavLink to="/shef/profile">{username}</NavLink>
                    <NavLink to="/shef/profile/recipes">recipes</NavLink>
                    <NavLink to="/login">log in</NavLink>
                    <NavLink to="/login" onClick={LogOut}>log out</NavLink>
                  </div>
                </div>
              </div>

            </div>
        </>
    )
}

