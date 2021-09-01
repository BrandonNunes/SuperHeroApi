import React from 'react'

export const Header = ({setSearch, value, setValue}) => {
    
    return (
       <header className="head">
            <h3>Search Hero or Villain:</h3>
            <label >
               <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
               <input type='button' value='Search' onClick={()=>setSearch(value)} disabled={value===''?true:false}/>
           </label>
        </header>
    )
}
