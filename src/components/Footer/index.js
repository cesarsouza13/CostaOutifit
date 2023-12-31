import styles from './Footer.module.scss'
import {
FaInstagram,
FaWhatsapp
} from 'react-icons/fa'

const iconeProps = {
    color: 'white',
    size: 24,
    cursor: 'pointer'
}

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div >
                <FaInstagram {...iconeProps} />
                <FaWhatsapp {...iconeProps} />
            </div>
            
            
        </footer>
    )
}