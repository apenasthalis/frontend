import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar(){
    return (
      <nav className={styles.nav}>
        <div>
          <h1 className={styles.title}>Leopard</h1>
        </div>
        <div>
          <Link to="/login">
            <input
              className={styles.submit}
              type="submit"
              value="Fazer Login"
            />
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;  