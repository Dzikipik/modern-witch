import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import List from "./List";
import ListElement from "./ListElement";

export default function Menu() {
    const [error, setError] = useState("");
    const { currentUser } = useAuth();
    const navigate = useNavigate();
  
    return (
      <div className="menu">
        <List>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/weather">
            Pogoda
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/nameday">
            Imieniny
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/moonphase">
            Księżyc
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/tarotcard">
            Karta Tarota
          </Link>
        </ListElement>
        <ListElement>
          <Link className="list-el-link" to="/dashboard/comunicator">
            Komunikator
          </Link>
        </ListElement>
      </List>
      </div>
    );
  }