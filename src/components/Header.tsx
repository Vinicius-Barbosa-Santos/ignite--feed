// import Styles
import styles from './Header.module.css'

// import Assets
import logo from '../assets/logo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo do Ignite" />
        </header>
    )
}