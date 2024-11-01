import { useState } from "react";

import Perfil from "./components/perfil/perfil";
import Formulario from "./components/formulario/formulario";
import RepositorioList from "./components/repoList/Repositorio";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [NomeUsuario, setNomeUsuario] = useState ('');
  const [deuErro, setDeuErro] = useState(false);
  const [pesquisarUsuario, setPesquisarUsuario] = useState('');

    const handleError = (error) => {
        setDeuErro(error);
    };

    const handleSubmit = ((e) => {
      e.preventDefault()
      setDeuErro(false)
      setPesquisarUsuario(NomeUsuario)

      if (NomeUsuario.length > 1) {
        setPesquisarUsuario(NomeUsuario); 
    } else {
        setDeuErro(true);
    }
  })


  return(

    <div className="container-index">
        <h1>Mostre seus projetos do git hub</h1>
        <form onSubmit={handleSubmit}>
        <input
          className="input-name" type="text" placeholder="Digite aqui seu nome de usuário" onChange={(e) => {
            setNomeUsuario(e.target.value);
            setDeuErro(false);
          }}/>
          <button type="submit" className="btn-submit">pesquisar</button>
        </form>

        {deuErro && (
                <div className="errorMessage">
                    <h1>Não foi possível encontrar esse usuário.</h1>
                </div>
            )}

            {pesquisarUsuario && !deuErro && (
                <>
                    <Perfil NomeUsuario={pesquisarUsuario} onError={handleError} />
                    <RepositorioList NomeUsuario={pesquisarUsuario} onError={handleError} />
                </>
            )}
    </div>
  )
}

export default App

{/* {formularioEstaVisivel && (
  <Formulario/>
)}

<button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" className="btn btn-primary">toogle form</button>*/}