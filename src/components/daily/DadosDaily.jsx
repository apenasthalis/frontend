import styles from './DadosDaily.module.css';
import imga from '../img/search.svg';

function DadosDaily({data}){
    return(
        <div>
            <button className={styles.btn}>
                {data}
                <img src={imga} alt="" />
            </button>
        </div>
    )
}

export default DadosDaily;