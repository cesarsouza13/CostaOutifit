import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from '../../assets/nikelogo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Busca from '../Busca/index.js'

const iconeProps = {
    color: 'black',
    size: 20
}

const iconePropsBusca = {
    color: 'white',
    size: 20
}

export default function Navbar(){
    const location = useLocation()
    const navigate = useNavigate()
return(
    <div className={styles.container}>
    
    <nav className={styles.nav}>

        <div className={styles.links}>
            <div >
                <Link to='/' className={classNames(styles.link,{
                    [styles.selected]: window.location.pathname === '/'
                })}>
                    Home
                </Link>
                <Link to='/categoria/roupas' className={classNames(styles.link,{
                    [styles.selected]: window.location.pathname === '/categoria/roupas'
                })}>
                    Roupas
                </Link>
                <Link to='/categoria/sneakers' className={classNames(styles.link,{
                    [styles.selected]: window.location.pathname === '/categoria/sneakers'
                })}>
                    Sneakers
                </Link>
            </div>
          
          
        </div>

        <div className={styles.icones}>
                   
                    <Link to='/carrinho' className={styles.iconeCarrinho}>
                        {location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                        }
                   
                    </Link>
                 
            </div>
      
    </nav>
   
    </div>
    
)

}