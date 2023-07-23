import Header from '../../components/Header/index.js'
import styles from './Home.module.scss'
import geral from '../../assets/geral.jpg'
import Item from '../../components/Item/index.js'
import Busca from '../../components/Busca/index.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BannerFaleConosco from '../../components/BannerFaleConosco/index.js'
import { useState, useEffect, useRef } from 'react'

import classNames from 'classnames'
import Modal from '../../components/Modal/index.js'

export default function Home(){
    const navigate = useNavigate()
    const categorias = useSelector(state => state.categorias);
    const [isVisible, setIsVisible] = useState(false);
    const [abrirModal, setAbrirModal] = useState(false)
    const [infoModal, setInfoModal] = useState([])
    const divRef = useRef(null);
    useEffect(() =>{

        window.scrollTo(0, 0);
        const handleScroll = () =>{
            const scrollPosition = window.innerHeight + window.scrollY;
            const elementPosition = divRef.current.offsetTop;

            
            console.log(scrollPosition,elementPosition)
            if (scrollPosition >= elementPosition) {
                setIsVisible(true);
              } else {
                setIsVisible(false);
              }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const itens = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i')
    
            console.log(state)
           return state.itens.filter(item =>item.destaque == true && item.titulo.match(regexp))
           
        });
    return(
        <div>
            <Header
            titulo='Costa Outfit'
            descricao='Onde seu outfit fica mais barato!'
            imagem={geral}
            className={styles.header}
            />
            <div className={styles.categorias}>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria,index) =>(
                        <div key={index} onClick={()=> navigate(`/categoria/${categoria.id}`)}>
                            <img src={categoria.thumbnail} alt={categoria.nome} />
                            <h1>{categoria.nome}</h1>
                        </div>
                    )
                    )}
                </div>
            </div>
            <BannerFaleConosco />
            <div >
           
                <div className={styles.novidades}>
                    <div className={styles.filtros}>
                        <h2 className={styles.titulo}>Lançamentos</h2>
                        <div className={styles.busca}>
                            <Busca  />
                        </div>
                    </div>
                    
                    <div ref={divRef} className={classNames(styles.itens, {[styles.visible]: isVisible })}>
                    {itens?.map(item =>(
                    <Item key={item.id} item={item} setAbrirModal={setAbrirModal} setInfoModal={setInfoModal}/>
                     ))}
                     </div>
                    {abrirModal && <Modal infoModal={infoModal} setAbrirModal={setAbrirModal}/>}
       
       
                </div>
            </div>           
        </div>
    )
}