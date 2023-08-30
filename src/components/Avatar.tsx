// import Styles
import styles from './Avatar.module.css'


interface Props {
    src: string,
    hasBorder?: boolean
}

export const Avatar = ({ src, hasBorder }: Props) => {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt="" 
        />
    )
}