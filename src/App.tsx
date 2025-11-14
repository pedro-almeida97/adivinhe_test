import styles from './app.module.css'

import { Header } from './components/Header'
import { Tip } from './components/Tip'

export default function App() {
  function handleRestart() {
    alert('Reiniciar o jogo')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />
        <Tip tip="Biblioteca para criar interfaces Web com Javascript." />
      </main>
    </div>
  )
}
