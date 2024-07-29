import React from "react";
import './Specials.css';
import Button from "../Common/Button";

const Specials = () => {
    return(
        <div className="Specials">
            <div className="sp-top">
                <span className="sp-head">This Week's Specials!</span>
                <Button data={"Onlne Menu"} />
            </div>
        </div>
    )
}

export default Specials;