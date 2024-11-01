import { useEffect, useState } from "react";
import styles from './Repositorio.module.css'

export default function RepositorioList ({NomeUsuario , onError}){

    const [repos, setRepos] = useState ([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    
    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${NomeUsuario}/repos`)
        .then(res => {

            if(!res.ok){
                throw new Error('Usuário não encontrado')
            }
            return res.json()
        }
        )
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
                onError(false);
            }, 3000);
            
        })
        .catch(e => {
            setEstaCarregando(false);
            onError(true);
        });
    },[NomeUsuario, onError]);

    return(
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id, name, linguage, html_url}) => (
                        <li className={styles.listItem} key={id} >
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguage:</b> {linguage}
                            </div>
                            <a className={styles.itemLink}target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>    
            )}
    </div>
    )
}