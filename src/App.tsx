import type { FC } from 'react'
import Left from '@/components/left.tsx'
import Right from '@/components/right.tsx'
import styles from '@/App.module.less'

const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter 计数器案例</h1>
      <hr />

      <div className={styles.boxPanel}>
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
