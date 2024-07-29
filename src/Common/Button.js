import React from "react";
import './Button.css';

const Button = ({data, style}) => {
    return(
        <div className="Button">
            <button style={style} className="btn">{data}</button>
        </div>
    )
}

export default Button;