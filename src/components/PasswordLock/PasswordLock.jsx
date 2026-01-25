import { useState } from 'react'
import styles from './PasswordLock.module.css'

function PasswordLock({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  // Change this password to whatever you want
  const CORRECT_PASSWORD = '2004'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  return (
    <div className={styles.lockScreen}>
      <form onSubmit={handleSubmit} className={styles.lockForm}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
          className={`${styles.passwordInput} ${error ? styles.shake : ''}`}
          autoFocus
        />
      </form>
    </div>
  )
}

export default PasswordLock

