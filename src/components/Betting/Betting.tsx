import React from 'react'
import styles from './Betting.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearBet, setRound } from '../../redux/actions/GameActions'
import { getPlayerCard, getDealerCard } from '../../redux/actions/CardActions'
import { RootState } from '../../redux/reducers'
import { IoMdClose } from 'react-icons/io'
import { BiRightArrow } from 'react-icons/bi'

type Props = {
  deckId: string;
  setShowTokens:React.Dispatch<React.SetStateAction<boolean>>;
  showTokens:boolean;
};
const Betting: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch()
  const game = useSelector((state: RootState) => state.game)
  const { bet } = game
  return (
    <div className={styles.betContainer}>
      {bet > 0
        ? (
        <div className={styles.betContainer__firstRow}>
          <div className={styles.betContainer__button}>
            <button
            onClick={() => dispatch(clearBet())}
            className={styles.betContainer__reset}>
              <IoMdClose />
            </button>
            <span
            className={styles.betContainer__btnDesc}>Reset</span>
          </div>
          <div>
          </div>
          <div className={styles.betContainer__button}>
            <button
              className={styles.betContainer__deal}
              onClick={() => {
                dispatch(setRound())
                dispatch(getPlayerCard(props.deckId))
                dispatch(getDealerCard(props.deckId))
                dispatch(getPlayerCard(props.deckId))
                dispatch(getDealerCard(props.deckId))
                props.setShowTokens(!props.showTokens)
              }}
            >
              <BiRightArrow />
            </button>
            <span className={styles.betContainer__btnDesc}>Deal</span>
          </div>
        </div>
          )
        : (
        <div style={{ height: '200px' }}></div>
          )}
      <div className={styles.betContainer__secondRow}>

      </div>
    </div>
  )
}

export default Betting
