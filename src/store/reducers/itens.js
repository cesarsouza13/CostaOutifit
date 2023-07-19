import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid'

import jack1 from 'assets/categorias/jack (1) (1).jpg'
import jack2 from 'assets/categorias/jack (1).jpg'
import jack3 from 'assets/categorias/jack (2).jpg'
import jack5 from 'assets/categorias/jack (4).jpg'

import jordan1 from 'assets/categorias/jordan (1).jpg'
import jordan2 from 'assets/categorias/jordan (2).jpg'
import jordan3 from 'assets/categorias/jordan (3).jpg'



import jordan7 from 'assets/categorias/jordan (8).jpg'
import jordan8 from 'assets/categorias/jordan.jpg'

const estadoInicial = [{
  titulo: 'Camisa Jack',
  foto: jack1,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  destaque: true
}, {
  titulo: 'Camisa Jack',
  foto: jack2,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas',
  destaque: true
},{
  titulo: 'Camisa Jack',
  foto: jack3,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas'
  ,
  destaque: true
}, {
  titulo:'Camisa Jack',
  foto: jack5,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'roupas'
},
{
  titulo: 'Tenis Jordan',
  foto: jordan1,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true
}, 
{
  titulo: 'Tenis Jordan',
  foto: jordan2,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true
}, 
{
  titulo: 'Tenis Jordan',
  foto: jordan3,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers',
  destaque: true
}
, 
{
  titulo: 'Tenis Jordan',
  foto: jordan7,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers'
},
{
  titulo: 'Tenis Jordan',
  foto: jordan8,
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'sneakers'
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
      }
    }
  })
  export const  {mudarFavorito} = itensSlice.actions;
  export default itensSlice.reducer