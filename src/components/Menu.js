import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import List from "./List";
import ListElement from "./ListElement";
import weatherIcon from "../icons/weather.png";
import moonFull from '../icons/moonfull.png';
import tarotCard from "../icons/tarot.png";
import chat from "../icons/chat.png";

export default function Menu() {
    return (
      <div className="menu">
        <List>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/weather">
            <img className="icon-small" src={weatherIcon} alt="weather icon"/>
            Pogoda
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/moonphase">
          <img className="icon-small" src={moonFull} />
            Księżyc
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/tarotcard">
          <img className="icon-small" src={tarotCard} />
            Karta Tarota
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/chat">
          <img className="icon-small" src={chat} />
            Chat
          </Link>
        </ListElement>
      </List>
      </div>
    );
  }