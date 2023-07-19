import { createSlice } from '@reduxjs/toolkit';
import tshirt from 'assets/categorias/header/t-shirt.jpg'
import sneakers from 'assets/categorias/header/sneakers.jpg'

const estadoInicial = [{
    nome: 'Roupas',
    thumbnail: tshirt,
    id: 'roupas',
    descricao: 'As melhores Roupas da moda streetwear estão aqui!'
  }, {
    nome: 'Sneakers',
    thumbnail: sneakers,   
    id: 'sneakers',
    descricao: 'Encontre aqui os melhores sneakers da atualidade com a sua cara!'
  }];

  const categoriaSlice = createSlice({
    name: 'categorias',
    initialState: estadoInicial
  })

  export default categoriaSlice.reducer