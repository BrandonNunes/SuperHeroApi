
import React,{ useState, useEffect} from "react";
import axios from "axios";
import { Header } from "./components/Header";
import  { Hero }  from "./components/Hero";
import "./components/app.css"


function App() {
  const [hero,setHero] = useState([]);
  const [search,setSearch] = useState('ironman');
  const [value, setValue] = useState('')
  const token = '2073922109429846'
  const baseUrl = `https://superheroapi.com/api.php/${token}/search/${search}`;
  const [loading, setLoading] = useState(true)

 
useEffect(() => {
  
  
  axios.get(baseUrl).then((res)=>
  {
    setHero(res.data.results)
    setLoading(false)
  })
  
}, [search, baseUrl])

//Parte em teste para ativar a tecla ENTER para buscar, porem esta dando erro de loop
// document.addEventListener('keyup', (e)=>{
  
//   if(e.keyCode === 13){
//     setSearch(value)
//   }
// })


if(search === ''){
  setSearch('')
}



  return (
    <main className="App">
       
        <Header value={value} setValue={setValue} setSearch={setSearch}/>
          <h4>{loading ? 'Loading...' : 'Results:'}</h4>
        {hero?<Hero hero={hero}/>:<p style={{fontSize:"30px",color:"red" }}>Not Found... :(</p>}
     
    </main>
  );
}

export default App;
