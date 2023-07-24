import Header from "../../components/Header/index.js";
import HeaderGeral from "../../components/Header/headerGeral.js";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './Categoria.module.scss'
import Item from '../../components/Item/index.js'
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../../components/Modal/index.js";
export default function Categoria() {
    const {nomeCategoria} = useParams()
    const [abrirModal, setAbrirModal] = useState(false)
    const [infoModal, setInfoModal] = useState([])
   
    const {categoria, itens} = useSelector(state => {
        
        const regexp = new RegExp(state.busca, 'i')
      
           return{
            categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
            itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
           } 
        });
        

        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <div>
            <HeaderGeral
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header} 
                className={styles.header}       
            />
            <div className={styles.titulo}>
              Produtos
            </div>
            <div className={styles.itens}>
                {itens?.map(item =>(
                   <Item key={item.id} item={item}  setAbrirModal={setAbrirModal} setInfoModal={setInfoModal}/>
                ))}
            
              
            </div>
            {abrirModal && <Modal infoModal={infoModal} setAbrirModal={setAbrirModal}/>}
        </div>
    )
}