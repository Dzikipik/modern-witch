import React from 'react';

const CurrentCard = ({tarot}) => {
    const {value, type, suit, name, meaningUp, meaningRev} =  tarot;
    console.log(tarot);

    function RenderTarotCard(){
        if (type === "major"){
            return <img className="tarotcard-img" src={require(`./cards/${type}${value}.jpg`)} alt="" />
        } else {
            return <img className="tarotcard-img" src={require(`./cards/${type}-${suit}${value}.jpg`)} alt="" />
        }
    }

return(
    <>
   
        <RenderTarotCard />
    
    <div className="currentCard">
    
            <h2>{name}</h2>
            <p>{meaningUp}</p>
            <p>{meaningRev}</p>
    </div>
    </>
)
}

export default CurrentCard;