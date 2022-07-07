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

   useEffect(() => {
        const collectionRef = collection(db, "messages");
        const q = query(collectionRef, orderBy("createAt", "desc"), limit(20));

        const unsub = onSnapshot(q, (snapshot) => 
        setMessages(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        )
        return unsub
    }, []);


    return (
        <div className="chat">
            <div className="chat-messages">
 
                {messages.map(({id, text, photoURL, uid}) => (
                    <div key={id}>
                        <div className={`${uid === auth.currentUser.uid ? 'chat-msg-sent' : 'chat-msg-received'}`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                        </div>
                    </div>
                ))}
            
            </div>
        <div>
        <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
            
            
        </div>
    )
}