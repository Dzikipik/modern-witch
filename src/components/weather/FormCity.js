import React from 'react';


const FormCity = ({value}) => {  
    return(
        <form>
            <label>
                Wyszukaj miasto
            <input 
                aria-label='location'
                type="text" 
                required placeholder="Wyszukaj miasto" 
                value={value}
                onChange={e => e.target.value}/>
            </label>
        <button type="submit" className="button">Wyszukaj miasto</button>
        </form>
    )
}
export default FormCity;