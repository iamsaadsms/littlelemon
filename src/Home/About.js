import React from "react";
import './About.css';
import i1 from '../Media/r1.jpg'
import i2 from '../Media/r2.jpg'

const About = () => {
    return(
        <div className="About">
            <div className="l-ab">
                <span className="ab-head">Little Lemon</span>
                <span className="ab-city">Chicago</span>
                <p className="ab-p">
                Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </div>
            <div className="r-ab">
                <div className="r-images">
                <img className="i1" src={i1} alt="Img" />
                <img className="i2" src={i2} alt="Img" />
                </div>
            </div>
        </div>
    )
}

export default About;