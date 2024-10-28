import { useEffect, useState } from "react";
import styles from './Repositorio.module.css'

export default function RepositorioList ({NomeUsuario}){

    const [repos, setRepos] = useState ([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${NomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 3000);
            
        })
    },[NomeUsuario]);

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