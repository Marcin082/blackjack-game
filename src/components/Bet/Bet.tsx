import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBet } from '../../redux/actions/GameActions'
import { RootState } from '../../redux/reducers'
import styles from './Bet.module.scss'

const Bet: React.FC = () => {
  const game = useSelector((state: RootState) => state.game)
  const { bet, chips, roundStart } = game
  const dispatch = useDispatch()
  return (
    <div className={styles.betContainer}>
      <span className={styles.betContainer__bet}>${bet}</span>
      <span className={styles.betContainer__tokenContainer}>
        {chips.map((chip, index) => {
          const type = 'betContainer__showToken'.concat(chip)
          return (
            <img key={index}
              onClick={() => {
                if (roundStart !== true) {
                  dispatch(deleteBet(-Number(chip)))
                }
              }}
              className={chip ? styles[type] : styles.betContainer__token}
              alt="token"
              src={require(`../../assets/casino-chip${chip}.png`)}
            />
          )
        })}
      </span>
    </div>
  )
}

export default Bet
