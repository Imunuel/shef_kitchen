import React from "react";
import "./Header.css"
import logo from "../../pages/Screenshot_1.png"
import { NavLink } from "react-router-dom";


export function Header(){
    return (
        <>
            <div className="Header">
                <div className="header_item"><NavLink to='/shef/favorite'>favorite</NavLink></div>
                <div className="header_item"><NavLink to='/shef/top'>top</NavLink></div>
                <NavLink to="/shef"><img src={logo} alt="" className="logo" /></NavLink>
                <div className="header_item"><NavLink to='/shef/menu'>menu</NavLink></div>
                <div className="header_item"><NavLink to='/shef/profile'>profile</NavLink></div>
            </div>
        </>
    )
}

