import React from "react";
import './Navbar.css';
import logo from '../Media/logo.jpg'

const Navbar = () => {
    let tabs = [
        {
            name:"Home"
        },
        {
            name:"About"
        },
        {
            name:"Menu"
        },
        {
            name:"Reservations"
        },
        {
            name:"Order Online"
        },
        {
            name:"Login"
        },
    ]
    return(
        <div className="Navbar">
            <div className="nav-img">
                <img src={logo} className="logo" alt="Logo" />
            </div>
            {tabs.map((num, index) => (
                <div className="navtabs" key={index}>
                    <span className="tabs">{num.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Navbar;