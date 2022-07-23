import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import styles from './Winner.module.scss'
const Winner: React.FC = () => {
  const winner = useSelector((state: RootState) => state.game.result)
  const [text, setText] = useState<string>(
    winner === 'player' ? 'WIN!' : 'BUST!'
  )
  useEffect(() => {
    if (winner === 'draw') {
      setText('DRAW!')
    }
  }, [])
  return (
    <div className={styles.winnerContainer}>
      <h3
        style={{
          textShadow:
            text === 'WIN!'
              ? '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18'
              : '0 0 5px #141414, 0 0 10px #141414, 0 0 15px #141414, 0 0 20px #811515, 0 0 30px #a81818, 0 0 40px #a81818, 0 0 55px #a81818, 0 0 75px #a81818',
          color: text === 'WIN!' ? 'white' : 'black'
        }}
        className={styles.winnerContainer__text}
      >
        {text}
      </h3>
    </div>
  )
}

export default Winner
