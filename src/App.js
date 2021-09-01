
import React,{ useState, useEffect} from "react";
import axios from "axios";
import { Header } from "./components/Header";
import  { Hero }  from "./components/Hero";
import "./components/app.css"


function App() {
  const [hero,setHero] = useState([]);
  const [search,setSearch] = useState('batman');
  const [value, setValue] = useState('')
  const token = '2073922109429846'
  const baseUrl = `https://superheroapi.com/api/${token}/search/${search}`;
  const [loading, setLoading] = useState(true)

 
useEffect(() => {
  
  axios.get(baseUrl).then((res)=>
  {
    setHero(res.data.results)
    setLoading(false)
  }
  )
 
}, [search])
  
if(search === ''){
  setSearch('')
}
  return (
    <main className="App">
       
        <Header value={value} setValue={setValue} setSearch={setSearch}/>
        <h4>{loading ? 'Loading...' : 'Resultados:'}</h4>
        {hero?<Hero hero={hero}/>:<p style={{fontSize:"30px",color:"red" }}>Nada encontrado... :(</p>}
     
    </main>
  );
}

export default App;
