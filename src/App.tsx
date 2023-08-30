// import Components
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"

// import Styles
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id : 1,
    author: {
      avatarUlr: 'https://avatars.githubusercontent.com/u/41848606?v=4',
      name: 'Vinícius Barbosa Santos',
      role: 'CTO'
    },
    content: [
      {type : 'paragraph', content : 'Fala Galera'},
      {type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'},
      {type : 'link', content : 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-03 20:00:00')
  },
  {
    id : 2,
    author: {
      avatarUlr: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      {type : 'paragraph', content : 'Fala Galera'},
      {type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'},
      {type : 'link', content : 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-10 20:00:00')
  },
]

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          {posts.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App