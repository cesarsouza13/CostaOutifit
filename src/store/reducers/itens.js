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
  foto: jack1,
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
  foto: jack2,
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
  foto: jack3,
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
  foto: jack5,
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
  foto: jordan1,
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
  foto: jordan2,
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
  foto: jordan3,
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
  foto: jordan7,
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
  foto: jordan8,
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
        console.log(payload.infoModal.id, payload.selecaoTamanho)
        state = state.map(item =>{
          if(item.id === payload.infoModal.id) item.tamanhoSelecao =  payload.selecaoTamanho
          console.log( item.tamanhoSelecao)
          return item;
        })
      }
    }
  })
  export const  {mudarFavorito, setarTamanho} = itensSlice.actions;
  export default itensSlice.reducer