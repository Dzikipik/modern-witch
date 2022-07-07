import React, { useState, useEffect, useRef } from "react";
import {db, auth} from '../../dataBase/firebase'
import SendMessage from './SendMessage'
import { getFirestore, collection, query, where, getDocs, orderBy, limit, onSnapshot } from "firebase/firestore"

export default function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([{
        id: "",
        text: "",
    }])



    


    useEffect(
        () => {
        onSnapshot(collection(db, "messages"), (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })
        return
    } 
    // .orderBy("createAt").limit(10)

         // console.log(getMessages);
       , []);
    return (
        <div className="chat">
            <div className="chat-messages">
 
                {messages.map(({id, text, photoURL, uid}) => (
                    <div key={id} className="chat-msg">
                        <div  className={`chat-msg ${uid === auth.currentUser ? 'chat-msg-sent' : 'chat-msg-received'}`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                        </div>
                    </div>
                ))}
                <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
            </div>
        
            
            
        </div>
    )
}


