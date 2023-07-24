import { useEffect } from 'react'
import styles from './Busca.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { mudarBusca, resetarBusca } from '../../store/reducers/busca.js'
import { useLocation } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi';

import { useState } from 'react'

const iconePropsBusca = {
    color: 'black',
    size: 20
}

export default function Busca(){
    const busca = useSelector( state => state.busca)
    const [botaoBusca , setBotaoBusca] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const realizarPesquisa = () =>{
       
        setBotaoBusca(!botaoBusca);
        
    }
    useEffect(() =>{
        dispatch(resetarBusca());
    }, [location.pathname, dispatch])
    return(
        <div className={styles.caixabusca} >
            <input
                className={styles.inputHabilitado}
                placeholder='O que você procura?'
                value={busca}
                onChange={evento => dispatch(mudarBusca(evento.target.value))}
            />
             <BiSearchAlt {...iconePropsBusca} className={styles.botaoBusca} onClick={realizarPesquisa}/>
        </div>
    )
}