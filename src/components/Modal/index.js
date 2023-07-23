import styles from './Modal.module.scss'
import jack1 from '../../assets/categorias/jack (1) (1).jpg'
import {BiCloset} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {GrNext, GrPrevious} from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { mudarCarrinho } from '../../store/reducers/carrinho.js';
import { useState } from 'react'
import { setarTamanho } from '../../store/reducers/itens'

export default function Modal ({infoModal, setAbrirModal}){
    const dispatch = useDispatch()
    const [selecaoTamanho, setSelecaoTamnho] = useState(null)
    const [atualFoto, setAtualFoto] = useState(0)
    const [alerta, setAlerta] = useState(false)
    const iconeProps = {
        size: 24,
     
    }

    const closeProps = {
        size: 18,
        color: 'white',
        cursor: 'pointer'
    }

    const {
        titulo,
        foto,
        colecaoFoto,
        preco,
        favorito,
        categoria,
        id,
        carrinho,
        quantidade,
        tamanho
    } = infoModal

       function resolverCarrinho(){
        if(selecaoTamanho === null){
            setAlerta(true)
        }
        else{
            dispatch(setarTamanho({infoModal,selecaoTamanho}))
            setAbrirModal(false)
            dispatch(mudarCarrinho(id));
        }
      
    }

    function fecharModal(){
        setAbrirModal(false);
    }
    
    function selecionaTamanho(tamanho){
        console.log(tamanho)
        setSelecaoTamnho(tamanho)
    }

    const proxFoto = () =>{
        console.log('tese')
        setAtualFoto((prev) => (prev === 0 ? colecaoFoto.length - 1 : prev - 1));
    }

    const antFoto = () =>{
        setAtualFoto((prev) => (prev === colecaoFoto.length - 1 ? 0 : prev + 1));
    }
    return(
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
               <button className={styles['icone-close']} onClick={()=> fecharModal()}>
               <AiOutlineClose {...closeProps} />
               </button>
               
                <div className={styles['container-imagem']}>
                    <img  key={atualFoto} src={colecaoFoto[atualFoto]} className={styles.imgOferta} />
                    <div className={styles['container-imagem-icons']}>
                        <button onClick={antFoto}>
                            <GrPrevious {...iconeProps}/>
                        </button>
                        <button  onClick={proxFoto}>
                            <GrNext {...iconeProps} />
                        </button>
                    </div>
                 
                </div>
                <div className={styles['container-descricao']}>
                    <h2>{titulo}</h2>
                    <h3>{categoria}</h3>
                    <p className={styles['modal-content-paragrafo']}>R$ {preco.toFixed(2)}</p>
               
                    <div className={styles['container-tamanho']}>
                        <div>
                        
                            <p>Tamanho</p>
                        </div>
                        <div className={styles['btn-tamanho']}>
                            {tamanho.map(tamanho =>(
                                <button
                                    onClick={() => selecionaTamanho(tamanho)}  
                                    key={tamanho} 
                                    className={tamanho === selecaoTamanho ? styles.selecionado : ''}>
                                     {tamanho}
                                     </button>
                            ))}

                        </div>
                        {alerta ? <p className={styles.alerta}>Selecione um Tamanho</p> : ''}
                        
                  
                    </div>
                    <button className={styles.finalizar} onClick={resolverCarrinho}>Adicionar ao Carrinho</button>           
                </div>
            </div>
          
        </div>
    )
}