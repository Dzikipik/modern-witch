import React, { useState } from 'react'
import { db, auth } from '../../dataBase/firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState("")
    async function sendMessage(e) {
        e.preventDefault()
        const collectionRef = collection(db, "messages");
        const payload = {
            text: msg,
            uid: auth.currentUser.uid,
            createAt: serverTimestamp()};
        await addDoc(collectionRef, payload);
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
            <form className='chat-form' onSubmit={sendMessage}>
                <div className="chat-sendMsg">
                    <input 
                    placeholder='Napisz coś...' 
                    type="text" value={msg} 
                    onChange={e => setMsg(e.target.value)} />
                    <button className="button" type="submit">Wyślij</button>
                </div>
            </form>
    )
}

export default SendMessage;
