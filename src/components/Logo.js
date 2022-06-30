import React from "react";
import moonIcon from '../icons/moon.png'

export default function Logo() {
    return (
    <div className="logo-loginpanel">
        <img className="icon-big" src={moonIcon} />
        <div className="logo-big">Witch mode</div>
    </div>
    );
  }