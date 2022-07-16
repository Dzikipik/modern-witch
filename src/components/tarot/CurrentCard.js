import React from 'react';

const CurrentCard = ({tarot}) => {
    const {type, name, meaningUp, meaningRev} =  tarot;
    console.log(tarot)
return(
    <>
    <div className="currentCard">
            <h2>{name}</h2>
            <p>{meaningUp}</p>
            <p>{meaningRev}</p>
    </div>
    </>
)
}

export default CurrentCard;