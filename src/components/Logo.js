import React from "react";
import moonIcon from '../icons/moon.png'

export default function Logo() {
    return (
    <div className="login-logo">
        <img className="icon-big" src={moonIcon} />
        <div className="logo-big">State of notion</div>
    </div>
    );
  }