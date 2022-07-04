import React from "react";
import "./Header.css"
import logo from "../../components/Screenshot_1.png"

export default class Header extends React.Component{
render(): React.ReactNode {
    return(
        <div>
            <div className="Header">
                <div className="header_item">favorite</div>
                <div className="header_item">top</div>
                <img src={logo} alt="" className="logo" />
                <div className="header_item">menu</div>
                <div className="header_item">profile</div>
            </div>
        </div>
    )
}
}
