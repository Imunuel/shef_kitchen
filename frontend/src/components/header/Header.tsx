import React from "react";
import "./Header.css"
import logo from "../../components/Screenshot_1.png"
import { NavLink } from "react-router-dom";

export default class Header extends React.Component{
render(): React.ReactNode {
    return(
        <div>
            <div className="Header">
                <div className="header_item"><NavLink to='/shef/favorite'>favorite</NavLink></div>
                <div className="header_item"><NavLink to='/shef/top'>top</NavLink></div>
                <img src={logo} alt="" className="logo" />
                <div className="header_item"><NavLink to='/shef/menu'>menu</NavLink></div>
                <div className="header_item"><NavLink to='/shef/profile'>profile</NavLink></div>
            </div>
        </div>
    )
}
}
