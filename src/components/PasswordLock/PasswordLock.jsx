import { useState, useEffect } from 'react'
import styles from './PasswordLock.module.css'

// Target date: January 28, 2026 at 12:00 PM EST
const TARGET_DATE = new Date('2026-01-28T12:00:00-05:00').getTime()

function PasswordLock({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Change this password to whatever you want
  const CORRECT_PASSWORD = '2004'

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = TARGET_DATE - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === CORRECT_PASSWORD.toLowerCase()) {
      onUnlock()
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  const padNumber = (num) => String(num).padStart(2, '0')

  return (
    <div className={styles.lockScreen}>
      <div className={styles.countdown}>
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{padNumber(timeLeft.days)}</span>
          <span className={styles.timeLabel}>days</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{padNumber(timeLeft.hours)}</span>
          <span className={styles.timeLabel}>hours</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{padNumber(timeLeft.minutes)}</span>
          <span className={styles.timeLabel}>minutes</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeUnit}>
          <span className={styles.timeValue}>{padNumber(timeLeft.seconds)}</span>
          <span className={styles.timeLabel}>seconds</span>
        </div>
      </div>
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

