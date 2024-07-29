import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import MainHome from "./MainHome";
import Specials from "./Specials";

const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            <MainHome />
            <Specials />
        </div>
    )
}

export default Home;