import styles from './app.module.css'

import { Header } from './components/Header'

export default function App() {
  function handleRestart() {
    alert('Reiniciar o jogo')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />
      </main>
    </div>
  )
}
