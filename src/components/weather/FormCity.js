import React, { useState } from 'react';

const FormCity = ({submitSearch}) => {
    const [location, setLocation] = useState('');
  
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("potwierdzony formularz")
        if (!location || location === "") return;
        submitSearch(location);
    }

    return(
        <form onSubmit={onSubmit}>
        <label>
            Wyszukaj miasto
            <input 
                aria-label='location'
                type="text" 
                required placeholder="Wyszukaj miasto" 
                value={location}
                onChange={e => setLocation(e.target.value)}/>
            </label>
        <button type="submit" className="button" onClick={onSubmit}>Wyszukaj miasto</button>
        </form>
    )
}
export default FormCity;