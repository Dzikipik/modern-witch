import React, { useState } from 'react'
import { db, auth } from '../../dataBase/firebase'
// import firebase from 'firestore/firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


// const handleSendMessage = async () =>{
//     const collectionRef = collection(db, "messages");
//     const payload = {
//         id,
//         value, 
//         createdAt: serverTimestamp()};
//     const docRef = await addDoc(collectionRef, payload);

// }
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState("")
    async function sendMessage(e) {
        e.preventDefault()
        const collectionRef = collection(db, "messages");
        const payload = {
            text: msg,
            createAt: serverTimestamp()};
        await addDoc(collectionRef, payload);
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="chat-sendMsg">
                    <input 
                    placeholder='Napisz coś...' 
                    type="text" value={msg} 
                    onChange={e => setMsg(e.target.value)} />
                    <button className="button" type="submit">Wyślij</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;
