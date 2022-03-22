import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { gameReducer } from "../../redux/reducers/GameReducer";
import { Dealer, Player } from "../../types/types";
import styles from "./Cards.module.scss";
type Props = {
  who: Player | Dealer;
  showCard: boolean;
};
export const Cards: React.FC<Props> = (props: Props) => {
  const cards = useSelector((state: RootState) => state.cards);
  const { dealer } = cards;
  return (
    <>
      <div className={styles.cardContainer}>
        {props.who.cards.map((card) => {
          if (card === dealer.cards[1] && props.showCard === false) {
            return (
              <img
                className={styles.cardImg__back}
                src={require("../../assets/card3.png")}
                alt="card"
              />
            );
          }
          return <img className={styles.cardImg} src={card.image} alt="card" />;
        })}
      </div>
    </>
  );
};

export default Cards;
