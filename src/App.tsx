// import Components
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"

// import Styles
import './global.css'
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App