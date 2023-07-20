
import PaginaPadrao from "./components/PaginaPadrao/index";
import Home from "./pages/Home/index.js";
import Categoria from "./pages/Categoria/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho/index.js";


export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element={<Home/>} />
                    <Route path="/categoria/:nomeCategoria" element={<Categoria/>} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Route>           
            </Routes>
        </BrowserRouter>
    )
}