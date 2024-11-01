import styles from './Perfil.module.css'

export default ({NomeUsuario}) => {
    return(
        <>
            <header className={styles.header}>
                <img className={styles.avatar}src={`https://github.com/${NomeUsuario}.png`} alt="" />
                <h1 className={styles.name}>
                    {NomeUsuario}
                    </h1>
            </header>
        </>
    )
};
