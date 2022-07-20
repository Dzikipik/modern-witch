import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../dataBase/firebase";
import CurrentCard from "./CurrentCard"
import Loader from "../weather/Loader";
// import TarotCards from "./cards"

const TarotCard = () => {
      const [card, setCard] = useState({
        value: "",
        type: "",
        name:"",
        meaningUp: "",
        meaningRev: "",
        });
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);

      const getDate = () =>{
        const currentData = new Date();
      }
      

      const TAROTAPI = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1`;
      
      const getTarotCard = (e) => {
        e.preventDefault();
        fetch(TAROTAPI)
        .then(response =>{
          if(response.ok){
            return response
          }
          setLoading(false);
          setError(false)
        })
        .then(response => response.json())
        .then(card => {
          setCard({
            value: card.cards[0].value_int,
            type: card.cards[0].type,
            suit: card.cards[0].suit,
            name: card.cards[0].name,
            meaningUp: card.cards[0].meaning_up,
            meaningRev: card.cards[0].meaning_rev,
          })
          setError(false);
          setLoading(false); 
        })
        .catch(err => {
          setError(true);
          setLoading(false);
      })
    }


    return (
        <>
        <div className="tarotcard">
          <div className="header">
                <h2>Daily tarot card</h2>
                <button className="button" onClick={getTarotCard}>Wylosuj kartę</button>
            </div>
            {loading && <Loader />}
            {card.name.length === 0 || error ? null : <CurrentCard tarot={card}/>}
        </div>
        </>
    );
  }

  export default TarotCard;
