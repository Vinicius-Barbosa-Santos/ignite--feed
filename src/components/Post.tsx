// import Styles
import styles from './Post.module.css'

// import Components
import { Avatar } from './Avatar'
import { Comment } from './Comment'

// import Date-fns
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'
import { FormEvent, useState } from 'react'

interface Author {
    avatarUrl: string,
    name: string,
    role: string
}

interface ContentProps {
    type: string,
    content: string
}

interface Props {
    author: Author,
    content: ContentProps[],
    publishedAt: Date
}

export const Post = ({ author, content, publishedAt }: Props) => {
    const [newCommentsText, setNewCommentsText] = useState('')
    const [comments, setComments] = useState([
        'Post Muito bom'
    ])

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = (e: FormEvent) => {
        e.preventDefault()
        setComments([...comments, newCommentsText])
        setNewCommentsText('')
    }

    const deleteComment = (commentToDelete : string) => {
        const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeleteOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='' dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newCommentsText}
                    placeholder='Deixe um comentário'
                    onChange={(e) => setNewCommentsText(e.target.value)}
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}