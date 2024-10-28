import { useState } from "react";

import Perfil from "./components/perfil/perfil";
import Formulario from "./components/formulario/formulario";
import RepositorioList from "./components/repoList/Repositorio";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [NomeUsuario, setNomeUsuario] = useState ('');

  return(
    <>
  
      <input className="input-name" type="text"  placeholder ="Digite aqui seu nome de usuário"onBlur={(e) => setNomeUsuario(e.target.value)}/>

      { NomeUsuario .length > 4 &&(
        <>
          <Perfil NomeUsuario={NomeUsuario}/>
          <RepositorioList NomeUsuario={NomeUsuario}/>
        </>
      )}
      
      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" className="btn btn-primary">toogle form</button>*/}
    </>
  )
}

export default App
