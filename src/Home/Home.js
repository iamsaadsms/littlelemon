import React from "react";
import './Home.css';
import Navbar from "../Common/Navbar";
import MainHome from "./MainHome";
import Specials from "./Specials";
import Card from "../Common/Card";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "../Common/Footer";

const Home = () => {
    return(
        <div className="Home">
            <Navbar />
            <MainHome />
            <Specials />
            <Card />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default Home;