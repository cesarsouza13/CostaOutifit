import { useEffect } from 'react'
import styles from './Busca.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { mudarBusca, resetarBusca } from '../../store/reducers/busca.js'
import { useLocation } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi';

import { useState } from 'react'

const iconePropsBusca = {
    color: 'white',
    size: 20
}

export default function Busca(){
    const busca = useSelector( state => state.busca)
    const [botaoBusca , setBotaoBusca] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const realizarPesquisa = () =>{
       
        setBotaoBusca(!botaoBusca);
        console.log(botaoBusca)
    }
    useEffect(() =>{
        dispatch(resetarBusca());
    }, [location.pathname, dispatch])
    return(
        <div className={styles.caixabusca} >
            <input
                className={botaoBusca ? styles.inputHabilitado : styles.input }
                placeholder='O que você Procura'
                value={busca}
                onChange={evento => dispatch(mudarBusca(evento.target.value))}
            />
             <BiSearchAlt {...iconePropsBusca} className={styles.botaoBusca} onClick={realizarPesquisa}/>
        </div>
    )
}