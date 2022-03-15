import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Counter from "../Counter/Counter";
import styles from "./Round.module.scss";
import { RootState } from "../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCards,
  getDealerCard,
} from "../../redux/actions/CardActions";
import { makeSummary, setResult } from "../../redux/actions/GameActions";
import Winner from "../Winner/Winner";
import Buttons from "../Buttons/Buttons";
import BlackJack from "../BlackJack/BlackJack";
type Props = {
  deckId: string;
  setBlackJack:any;
  blackJack:string;
};
const Round: React.FC<Props> = (props: Props) => {
  const cards = useSelector((state: RootState) => state.cards);
  const game = useSelector((state: RootState) => state.game);
  const [showCard,setShowCard] = useState<boolean>(false)
  const [showButtons,setShowButtons] = useState<boolean>(true)
  const dispatch = useDispatch();
  type Result = "draw" | "player" | "dealer";
  
const{deckId,setBlackJack,blackJack}= props
  useEffect(()=>{
    if(cards.player.points>=21){
      setTimeout(() => dispatch(setResult(checkResults())),2000)
      setTimeout(() => {
      dispatch(makeSummary());
      dispatch(clearCards());
    }, 4000);
    }
  },[cards.player.points])

  useEffect(()=>{
    if(cards.player.cards){
      setShowButtons(true)
    }
  },[game.round_start])

  useEffect(()=>{
    if(cards.player.cards.length<=2){
      if(cards.player.points===21){
      setTimeout(() => setBlackJack('player'),2000)
      setBlackJack('')
      }
      else if(cards.dealer.points===21){
        setTimeout(() => setBlackJack('dealer'),2000)
        setBlackJack('')
      }
    }
  },[])
  const checkResults = (): Result => {
    console.log(cards.player.points,cards.dealer.points)
    if (cards.player.points === cards.dealer.points) {
      return "draw";
    }
    else if (
      cards.player.points <= 21 && 
      (cards.dealer.points >21||
      cards.player.points > cards.dealer.points)
    ) {
      return "player";
    } 
    else {
      return "dealer";
    }
  };
  useEffect(()=>{
    if(!showButtons&&cards.dealer.points<17&&cards.player.points <= 21){
      setTimeout(() => dispatch(getDealerCard(deckId)), 1500);
    }
    if(!showButtons&&cards.dealer.points>=17&&cards.player.points <= 21){
      setTimeout(() => dispatch(setResult(checkResults())), 2000);
    }
  },[showButtons,cards.dealer.points])
  const StandHandler = () => {
    console.log("AA")
    setShowCard(true)
    setShowButtons(false)
    
    setTimeout(() => {
      dispatch(makeSummary());
      dispatch(clearCards());
    }, 8000);
  };
  
  return (
    <>
      
        <div className={styles.roundContainer}>
          <div className={styles.roundContainer__row}>
            {cards.player.cards.length===0?
            <div style={{
              height:'600px'
            }}></div>
            :
            <>
            <Cards showCard={showCard} who={cards.dealer} />
            <Cards showCard={showCard} who={cards.player} />
            </>
          }
          </div>
          <div className={styles.roundContainer__points}>
            <Counter showCard={showCard} who={cards.dealer} />
            <span className={styles.roundContainer__bet}>
              
            </span>
            <Counter showCard={showCard} who={cards.player} />
          </div>
          <div className={styles.roundContainer__actions}>
            
          
          {cards.player.cards.length!==0 && cards.player.points<21 && showButtons&&
          <Buttons standHandler={StandHandler} deckId={deckId}/>}
          </div>
        </div>
      {game.result &&  <Winner />}
      {blackJack!=="" && <BlackJack blackJack={blackJack}/>}
    </>
  );
};

export default Round;
