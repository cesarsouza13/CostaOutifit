import styles from './Banner.module.scss'
import bannerImg from '../../assets/bannerdestaque.jpg'
export default function BannerFaleConosco(){
    return(
        <div className={styles.banner}>
            <img src={bannerImg} />
            <div className={styles['banner-container']}>
                <h2>
                    Para Você
                </h2>
                <p>
                Descubra a revolução do estilo streetwear em sua forma mais autêntica.                 Nossa coleção única de roupas urbanas combina moda contemporânea com a liberdade de expressão, permitindo que você crie seu próprio visual exclusivo.
                </p>
                <p>
 E aqui está o melhor: se você não encontrar a peça perfeita em nosso site, oferecemos a opção de encomendar uma roupa não disponibilizada em nosso DROP.
                </p>
                <button>
                    Fale Conosco
                </button>
            </div>
        </div>
    )
}