import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import { Dealer, Player } from '../../types/types'
import styles from './Counter.module.scss'
type Props = {
  who: Player | Dealer;
  showCard: boolean;
};
const Counter: React.FC<Props> = (props: Props) => {
  const cards = useSelector((state: RootState) => state.cards)
  const { dealer } = cards
  let dealerCards: string = ''
  if (dealer.cards[0] !== undefined) {
    if (/[a-zA-Z]/.test(dealer.cards[0].value)) {
      dealerCards = '10'
    } else {
      dealerCards = dealer.cards[0].value
    }
  }

  return (
    <div className={styles.counter}>
      {dealer.cards === props.who.cards && props.showCard === false
        ? dealerCards
        : props.who.points}
    </div>
  )
}

export default Counter
