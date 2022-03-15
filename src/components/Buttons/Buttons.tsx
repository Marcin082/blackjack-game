import React from 'react';
import styles from './Buttons.module.scss'
import {
    getPlayerCard,
} from "../../redux/actions/CardActions";
import { doubleBet} from "../../redux/actions/GameActions";
import { IoHandLeftOutline } from "react-icons/io5";
import { BiDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
type Props = {
    deckId: string;
    standHandler:any;
  };
const Buttons:React.FC<Props> = (props:Props) => {
    const cards = useSelector((state: RootState) => state.cards);
    const game = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch()
    
    
    let FirstDealerCard = ""
    if (cards.dealer.cards[0] !== undefined) {
        if (/[A-B]/.test(cards.dealer.cards[0].value)) {
        FirstDealerCard = cards.dealer.cards[0].value;
        }
    }
    return (
        <div className={styles.buttonsContainer}>
        
         <div className={styles.buttonsContainer__buttonRow}>
            <div className={styles.buttonsContainer__buttonContainer}>
              <button
              className={styles.buttonsContainer__stand}
              onClick={() => props.standHandler()}
            >
              <IoHandLeftOutline />
            </button>
            <span className={styles.buttonsContainer__buttonDesc}>Stand</span>
            </div>
            
            <div className={styles.buttonsContainer__buttonContainer}>
              <button
             className={styles.buttonsContainer__double}
             onClick={() => {
               if(game.cash>=2*game.bet){
                 dispatch(doubleBet())
                dispatch(getPlayerCard(props.deckId))
               }
               
              }}
            ><img style={{width:'40px'}}
            alt="doubleIcon" src={require("../../assets/double.png")}/>
            </button>
            <span className={styles.buttonsContainer__buttonDesc}>Double</span>
            </div>

            {FirstDealerCard==="ACE"&&<div className={styles.buttonsContainer__buttonContainer}>
              <button
             className={styles.buttonsContainer__insurance}
             onClick={() => {
     
              }}
            ><img style={{width:'40px'}}
            alt="doubleIcon" src={require("../../assets/insurance.png")}/>
            </button>
            <span className={styles.buttonsContainer__buttonDesc}>Insurnce</span>
            </div>}

           <div className={styles.buttonsContainer__buttonContainer}>
             <button
              className={styles.buttonsContainer__hit}
              onClick={() =>{
                dispatch(getPlayerCard(props.deckId))
              }
                
              }
            >
              <BiDownArrow />
            </button>
            <span className={styles.buttonsContainer__buttonDesc}>Hit</span>
           </div>
             
          </div>
          </div>
    );
};

export default Buttons;