import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES=['btn--primary', 'btn--outline']
const SIZES=['btn-medium','btn-large']

export const Button=({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
  to = '/sign-up' // Set a default value for the 'to' prop
})=>{
    const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];
    const checkButtonSize= SIZES.includes(buttonSize)? buttonSize: SIZES[0]

    return(
        <Link to={to} className="btn-mobile"> {/* Use the passed 'to' prop */}
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}
