import React from 'react'
import icon from './search.png'
export const Header = ({setSearch, value, setValue}) => {
    
 
    return (
       <header className="head">
            <h3>Search Hero or Villain:</h3>
            <label >
               <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Search"/>
               <button className='btn'  onClick={()=>setSearch(value)} disabled={value===''?true:false}><img src={icon} width='20px' alt="search"/></button>
           </label>
        </header>
    )
}
