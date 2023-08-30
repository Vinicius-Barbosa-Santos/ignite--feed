// import Styles
import styles from './SideBar.module.css'

// Phosphor React
import { PencilLine } from 'phosphor-react'

// import Components 
import { Avatar } from './Avatar'

export const SideBar = () => {
    return (
        <aside className={styles.sideBar}>
            <img className={styles.cover} src={'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} alt="" />

            <div className={styles.profile}>
                <Avatar hasBorder src='https://avatars.githubusercontent.com/u/41848606?v=4'/>

                <strong>Vinícius Barbosa Santos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}