import styles from './HeaderGeral.module.scss'
import TituloSemImagem from './tituloSemImagem'

export default function HeaderGeral({titulo, descricao, className = '', imagem}){
    return(
        <header className={styles.header}>
            {titulo && !imagem && 
                <TituloSemImagem 
                titulo={titulo}
                descricao={descricao}
            />
            }
        </header>
    )
}