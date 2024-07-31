import React from "react";
import './Testimonials.css';
import Reviews from "../Common/Reviews";

const Testimonials = () => {
    return(
        <div className="Testimonials">
            <div className="t-head">
                <span className="th">Testimonials</span>
            </div>
            <div className="t-body">
                <Reviews />
            </div>
        </div>
    )
}

export default Testimonials;