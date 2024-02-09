import styles from './BotaoImage.module.css'

function BotaoImage({txt, img}){
    return(
        <button className={styles.btn} >
            <img src={img} alt="" />
            {txt}
        </button>
    )
}

export default BotaoImage;