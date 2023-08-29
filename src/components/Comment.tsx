// import Styles
import styles from './Comment.module.css'

// import Phosphor
import { ThumbsUp, Trash } from 'phosphor-react'

export const Comment = () => {
    return(
        <div className={styles.comment}>
            <img src={'https://avatars.githubusercontent.com/u/41848606?v=4'} alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinícius Barbosa</strong>
                            <time title='11 de Maio ás 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1 hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Nossa, adorei amigo! Parabé|</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}