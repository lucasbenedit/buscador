import { useState } from 'react'
import { FiSearch} from 'react-icons/fi';
import './styles.css';

import api from './services/api';


function App() {

   const[input, setInput] = useState('');
   const[cep, setcep] = useState({});


   async function handlesearch(){
    ///11704120/json/

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

   try{
    const response = await api.get('${input}/json');
    setcep(response.data)
    setInput("");
   }catch{
      alert("ops erro ao buscar")
      setInput("")
   }
   
  }

   return (
    <div className="containe">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containeImput">
      <input 
      type="text"
      placeholder="Digite seu cep..."
      value={input}
      anChange={(e) => setInput(e.target.value) }
      />

     <button className="buttonSearch" anclick={handlesearch}>
       <FiSearch  size={25} color="#FFF"/>
     </button>
      </div>

    
      {Object.keys(cep).length > 0 &&(
        <main className="main">
    <h1> CEP: {cep.cep}</h1>

    <span>{cep.logradouro}</span>
    <span>Complemento: {cep.complemento}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade} - {cep.uf}</span>
  
      </main>
    )}
    

    </div>
  );
}

export default App;
