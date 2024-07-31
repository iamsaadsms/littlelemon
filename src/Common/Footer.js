import React from "react";
import './Footer.css';
import logo from '../Media/logo.jpg';

const Footer = () => {
    let nav = [
        {
            navigation:"Home"
        },
        {
            navigation:"About"
        },
                {
            navigation:"Menu"
        },
        {
            navigation:"Reservations"
        },
        {
            navigation:"Order Online"
        },
        {
            navigation:"Login"
        }
    ]


    let contact = [
        {
            con:"Phone Number"
        },
        {
            con:"Email"
        },
        {
            con:"Address"
        }
    ]

    let social = [
        {
            soc:"Instagram"
        },
        {
            soc:"LinkedIn"
        },
        {
            soc:"Pinterest"
        }
    ]
    return(
        <div className="Footer">
            <div className="logo-footer">
                <img src={logo} className="f-logo" alt="Logo" />
            </div>
            <div className="footer-div">
                <span className="foot-head">Navigation</span>
                {nav.map((num, index) => (
                    <span className="foot-sub">{num.navigation}</span>
                ))}
            </div>
            <div className="footer-div">
                <span className="foot-head">Contact</span>
                {contact.map((num, index) => (
                    <span className="foot-sub">{num.con}</span>
                ))}
            </div>
            <div className="footer-div">
                <span className="foot-head">Social Media</span>
                {social.map((num, index) => (
                    <span className="foot-sub">{num.soc}</span>
                ))}
            </div>
        </div>
    )
}

export default Footer;