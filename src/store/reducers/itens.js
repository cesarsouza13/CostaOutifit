import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid'



import jack1 from '../../assets/categorias/camisaum.jpg'
import jack2 from '../../assets/categorias/camisadois.jpg'
import jack3 from '../../assets/categorias/camisatres.jpg'
import jack5 from '../../assets/categorias/camisaquatro.jpg'

import jordan1 from '../../assets/categorias/tenisum.jpg'
import jordan2 from '../../assets/categorias/tenisdois.jpg'
import jordan3 from '../../assets/categorias/tenistres.jpg'

import jordan7 from '../../assets/categorias/tesniquatro.jpg'
import jordan8 from '../../assets/categorias/treniscinco.jpg'

import vermelho from '../../assets/categorias/vermelho.jpg'
import verde from '../../assets/categorias/verde.jpg'
import azul from '../../assets/categorias/azul.jpg'
const estadoInicial = [{
  titulo: 'Camisa Jack',
  foto: '',
  colecaoFoto: [jack1, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  destaque: true,
  tamanho: ['P', 'M', 'G'],
  tamanhoSelecao: ''
}, {
  titulo: 'Camisa Jack',
  foto: '',
  colecaoFoto: [jack2, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  destaque: true,
  tamanho: ['P', 'M', 'G'],
  tamanhoSelecao: ''
},{
  titulo: 'Camisa Jack',
  foto: '',
  colecaoFoto: [jack3, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  destaque: true,
  tamanho: ['P', 'M', 'G'],
  tamanhoSelecao: ''
}, {
  titulo:'Camisa Jack',
  foto: '',
  colecaoFoto: [jack5, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  tamanho: ['P', 'M', 'G'],
  tamanhoSelecao: ''
},
{
  titulo: 'Tenis Jordan',
  foto: '',
  colecaoFoto: [jordan1, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true,
  tamanho: ['35', '36', '37', '38', '39', '40', '41','42', '43' ],
  tamanhoSelecao: ''
}, 
{
  titulo: 'Tenis Jordan',
  foto: '',
  colecaoFoto: [jordan2, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true,
  tamanho: ['35', '36', '37', '38', '39', '40', '41','42', '43' ],
  tamanhoSelecao: ''
}, 
{
  titulo: 'Tenis Jordan',
  foto: '',
  colecaoFoto: [jordan3, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true,
  tamanho: ['35', '36', '37', '38', '39', '40', '41','42', '43' ],
  tamanhoSelecao: ''
}
, 
{
  titulo: 'Tenis Jordan',
  foto: '',
  colecaoFoto: [jordan7, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  tamanho: ['35', '36', '37', '38', '39', '40', '41','42', '43' ],
  tamanhoSelecao: ''
},
{
  titulo: 'Tenis Jordan',
  foto: '',
  colecaoFoto: [jordan8, vermelho, verde, azul],
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  tamanho: ['35', '36', '37', '38', '39', '40', '41','42', '43' ],
  tamanhoSelecao: ''
},];


  const itensSlice = createSlice({
    name: 'itens',
    initialState: estadoInicial,
    reducers: {
      mudarFavorito: (state, {payload}) =>{
        state = state.map( item=>{
          if(item.id === payload) item.favorito = !item.favorito
          return item;
        })
      },
      setarTamanho: (state, {payload}) =>{
        state = state.map(item =>{
          if(item.id === payload.infoModal.id) item.tamanhoSelecao =  payload.selecaoTamanho
     
          return item;
        })
      },
      setarFotos: (state, {payload}) =>{
        state = state.map((item,index) =>{
          item.foto = payload[index];
        })
      }
    }
  })
  export const  {mudarFavorito, setarTamanho, setarFotos} = itensSlice.actions;
  export default itensSlice.reducer