import React from "react";
import './MainHome.css';
import mh from '../Media/mh.jpg';
import Button from "../Common/Button";

const MainHome = () => {
    return (
        <div className="MainHome">
            <div className="mh-data">
                <span className="mh-head">Little Lemon</span>
                <span className="mh-city">Chicago</span>
                <p className="mh-p">We are a family owned Mediterranean Resaurant, focused on traditional recipes served with a modern twist.</p>
                <Button data={"Reserve A Table"} />
            </div>
            <div className="mh-img">
                <img src={mh} className="mainhome-img" alt="MainHome Image" />
            </div>
        </div>
    )
}

export default MainHome;