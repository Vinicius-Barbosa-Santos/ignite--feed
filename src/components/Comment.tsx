// import Styles
import styles from './Comment.module.css'

// import Phosphor
import { ThumbsUp, Trash } from 'phosphor-react'

// import Components
import { Avatar } from './Avatar'

interface Props {
    content: string,
    onDeleteComment: (comment : string) => void
}

export const Comment = ({ content, onDeleteComment }: Props) => {

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={'https://avatars.githubusercontent.com/u/41848606?v=4'} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinícius Barbosa</strong>
                            <time title='11 de Maio ás 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
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