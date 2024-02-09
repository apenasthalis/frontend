import CorpoDaily from '../daily/CorpoDaily';
import SideBar from '../project/SideBar';
import styles from './Daily.module.css';

function Daily(){
    return (
      <div className={styles.div}>
        <SideBar />
        <CorpoDaily/>
      </div>
    );
}

export default Daily;