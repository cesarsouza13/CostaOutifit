import styles from './Navbar.module.scss'
import {ReactComponent as Logo} from '../../assets/nikelogo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Busca from 'components/Busca'

const iconeProps = {
    color: 'black',
    size: 20
}

export default function Navbar(){
    const location = useLocation()
    const navigate = useNavigate()
return(
    <div className={styles.container}>
    
    <nav className={styles.nav}>

        <div className={styles.links}>
            <div className={styles.container}>
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
                <div className={styles.icones}>
                    <Link to='/carrinho'>
                        {location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                        }
                   
                    </Link>
                    <BiSearchAlt {...iconeProps} />
                </div>
            </div>
        </div>
        <div className={styles.busca}>
        <Busca />
        </div>
       
    </nav>
   
    </div>
    
)

}