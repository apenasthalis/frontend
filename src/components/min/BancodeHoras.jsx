import styles from "./BancodeHoras.module.css";

function BancodeHoras({img, txt}){
    return(
        <div className={styles.div} >
            <img src={img} alt="" />
            <span>{txt}</span>
        </div>
    )
}

export default BancodeHoras;