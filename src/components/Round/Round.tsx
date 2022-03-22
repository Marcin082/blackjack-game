import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Counter from "../Counter/Counter";
import styles from "./Round.module.scss";
import { RootState } from "../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { clearCards, getDealerCard } from "../../redux/actions/CardActions";
import {
  addInsurance,
  makeSummary,
  setResult,
} from "../../redux/actions/GameActions";
import Winner from "../Winner/Winner";
import Buttons from "../Buttons/Buttons";
import BlackJack from "../BlackJack/BlackJack";
type Props = {
  deckId: string;
  setBlackJack: React.Dispatch<React.SetStateAction<string>>;
  blackJack: string;
};
const Round: React.FC<Props> = (props: Props) => {
  const cards = useSelector((state: RootState) => state.cards);
  const game = useSelector((state: RootState) => state.game);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(true);
  const [isInsurance, setIsInsurance] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { dealer,player } = cards;
  const { game_start, result, cash, round_start,bet } = game;
  type Result = "draw" | "player" | "dealer";

  const { deckId, setBlackJack, blackJack } = props;
  useEffect(() => {
    if (player.cards) {
      setShowButtons(true);
    }

    if (player.points === 21 && player.cards.length <= 2) {
      setTimeout(() => setBlackJack("player"), 2000);
      setBlackJack("");
    }
    if (dealer.points === 21 && dealer.cards.length <= 2) {
      if (isInsurance) {
        dispatch(addInsurance());
      }
      setTimeout(() => setBlackJack("dealer"), 2000);
      setBlackJack("");
    }
    if (player.points === 21) {
      StandHandler();
    }
    if (player.points > 21) {
      setTimeout(() => dispatch(setResult(checkResults())), 2000);
      setTimeout(() => {
        dispatch(makeSummary());
        dispatch(clearCards());
      }, 4000);
    }
  }, [player.points, player.cards, round_start]);

  useEffect(() => {
    if (!showButtons && dealer.points < 17 && player.points <= 21) {
      setTimeout(() => dispatch(getDealerCard(deckId)), 1500);
    }
    if (
      !showButtons &&
      dealer.points >= 17 &&
      player.points <= 21
    ) {
      setTimeout(() => dispatch(setResult(checkResults())), 2000);
    }
  }, [showButtons, dealer.points]);
  const checkResults = (): Result => {
    console.log(player.points, dealer.points);
    if (player.points === dealer.points) {
      return "draw";
    } else if (
      player.points <= 21 &&
      (dealer.points > 21 || player.points > dealer.points)
    ) {
      return "player";
    } else {
      return "dealer";
    }
  };
  const StandHandler = (): void => {
    console.log("AA");
    setShowCard(true);
    setShowButtons(false);

    setTimeout(() => {
      dispatch(makeSummary());
      dispatch(clearCards());
    }, 8000);
  };

  return (
    <>
      <div className={styles.roundContainer}>
        <div className={styles.roundContainer__row}>
          {player.cards.length === 0 ? (
            <div
              style={{
                height: "600px",
              }}
            ></div>
          ) : (
            <>
              <Cards showCard={showCard} who={cards.dealer} />
              <Cards showCard={showCard} who={cards.player} />
            </>
          )}
        </div>
        <div className={styles.roundContainer__points}>
          <Counter showCard={showCard} who={cards.dealer} />
          <span className={styles.roundContainer__bet}></span>
          <Counter showCard={showCard} who={cards.player} />
        </div>
        <div className={styles.roundContainer__actions}>
          {player.cards.length !== 0 &&
            player.points < 21 &&
            showButtons && (
              <Buttons
                standHandler={StandHandler}
                deckId={deckId}
                setIsInsurance={setIsInsurance}
              />
            )}
        </div>
      </div>
      {result && <Winner />}
      {blackJack !== "" && <BlackJack blackJack={blackJack} />}
    </>
  );
};

export default Round;
