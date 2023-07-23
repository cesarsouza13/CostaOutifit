import Header from '../../components/Header/index.js'
import HeaderGeral from '../../components/Header/headerGeral.js';
import styles from './Carrinho.module.scss'
import { useSelector, useDispatch} from 'react-redux'
import Item from '../../components/Item/index.js';
import { resetarCarrinho } from '../../store/reducers/carrinho.js';
export default function Carrinho(){
    
    const dispatch = useDispatch()

    const {carrinho, total} = useSelector(state => {
        let total = 0
        const regexp = new RegExp(state.busca, 'i')
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) =>{
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade)
            if(item.titulo.match(regexp)){
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                });
            }
            return itens;
        },[]);
        return {carrinho: carrinhoReduce, total: total}
    })

    const  enviarCarrinho = () => {
    const nomeDonoEmpresa = 'Costa_Outfit';
    const valorTotalCarrinho = total;
    let mensagem = `
    Olá ${nomeDonoEmpresa},
    
    Seguem as informações dos produtos presentes no carrinho:
    
    **Produtos no Carrinho:**`;

    carrinho.forEach((produto, index) => {
        const {titulo, preco, categoria, id, quantidade, tamanhoSelecao } = produto;
  
        mensagem += `
          ${index + 1}. **Produto:** ${titulo}
             **Categoria:** ${categoria}
             **Quantidade:** ${quantidade}
             **Tamanho:** ${tamanhoSelecao}
             **Valor Unitário (R$):** ${preco.toFixed(2)}
             **Valor Total Produto (R$): ** ${(preco*quantidade).toFixed(2)}
        `;
      });
      mensagem += `
      **Total do Carrinho (R$): ${valorTotalCarrinho.toFixed(2)}**

      Obrigado(a)!
    `;

    const numeroWhatsApp = '+5531982990835'
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`
    window.open(urlWhatsApp, '_blank'); 
    console.log(carrinho)
        console.log(mensagem)
        dispatch(resetarCarrinho())
    }
    return(
        <div>
            <HeaderGeral 
            titulo='Carrinho de Compras'
            descricao='Confira os produtos que você adicionou ao carrinho.'
            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id}  item={item} carrinho={true}/>)}
                <div className={styles.total}>
                    <strong>
                        Resumo do Carrinho
                    </strong>
                    <span>
                        Subtotal: <strong>R$ {total.toFixed(2)}</strong>
                    </span>
                </div>
                <button className={styles.finalizar} onClick={() => enviarCarrinho()}>
                        Finalizar Compra
                </button>
            </div>
        </div>
    )
}