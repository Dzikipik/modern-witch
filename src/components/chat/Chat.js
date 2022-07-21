import React, { useState, useEffect, useRef } from "react";
import {db, auth} from '../../dataBase/firebase'
import SendMessage from './SendMessage'
import { getFirestore, collection, query, where, getDocs, orderBy, limit, onSnapshot } from "firebase/firestore";


export default function Chat() {
    const scroll = useRef()
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState([{
        id: "",
        text: "",
    }])

   useEffect(() => {
        const collectionRef = collection(db, "messages");
        const q = query(collectionRef, orderBy("createAt", "desc"), limit(20));

        const unsub = onSnapshot(q, (snapshot) => 
        setMessages(snapshot.docs.map((doc) => ({
            ...doc.data(), 
            id:doc.id,
            createAt: doc.data().createAt.toDate().toUTCString()
        })))
        
        )
        return unsub
        
    }, []);

    console.log(messages)
    return (

        <div className="chat">
            <div className="header">
                <h2>State of notion</h2>
                <p>chat</p>
            </div>
            <div className="chat-messages">
                {messages.map(({id, text, photoURL, uid, createAt}) => (
                    <div key={id}>
                        <div className={`${uid === auth.currentUser.uid ? 'chat-messages-data-sent' : 'chat-messages-data-received'}`}>
                            {createAt}
                        </div>
                        <div className={`${uid === auth.currentUser.uid ? 'chat-msg-sent' : 'chat-msg-received'}`}>
                        {text}
                        </div>
                    </div>
                ))}
            
            </div>
        
        
        <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        
            
            
        </div>

    )
}