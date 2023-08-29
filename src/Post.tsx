interface Props {
    author: string,
    content: string
}

export const Post = ({ author, content }: Props) => {
    return (
        <div>
            {author}
            {content}
        </div>
    )
}