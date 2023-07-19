import styles from './TituloComImagem.module.scss';

export default function TituloComImagem({
  titulo,
  descricao,
  imagem,
  className
}) {
  return (
    <div className={`${className} ${styles.header}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        <p>Bem-vindo à Costa Outifit, onde estilo e atitude se unem em uma fusão de moda urbana e contemporânea. Aqui, você encontrará uma ampla seleção de peças inspiradas na cultura street, perfeitas para quem busca expressar sua individualidade e amor pela autenticidade. Na nossa loja, valorizamos a qualidade e o design inovador.</p>
        <p>Trabalhamos com marcas reconhecidas internacionalmente,Seja você um aficionado por hip-hop, skate, arte de rua ou simplesmente deseja adicionar um toque urbano ao seu guarda-roupa, temos opções para todos os gostos.</p>
      </div>
      <div className={styles['header-imagem']}>
        <img
          alt={titulo}
          src={imagem}
        />
      </div>
    </div>
  )
}