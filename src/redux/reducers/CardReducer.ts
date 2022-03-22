import { BiCaretDownSquare } from "react-icons/bi";
import { SingleCard } from "../../types/types";
import {cardsAction, ActionCardsTypes } from "../constants/CardsTypes";
const intialState = {
  player: { cards: [], points: 0 },
  dealer: { cards: [], points: 0 },
};
export interface State {
  player: { cards: SingleCard[], points: number},
  dealer: { cards: SingleCard[], points: number},
}

export const cardsReducer = (state:State = intialState, action:cardsAction): State => {
  switch (action.type) {
    case ActionCardsTypes.GET_PLAYER_CARD:
      let playerPoint = 0
      const aceCounter = state.player.cards.filter((card)=>card.value==="ACE").length
      if (action.payload.value!=="ACE"){
        if(/[a-zA-Z]/.test(action.payload.value)) {
        playerPoint = 10 
        }
        else{
          playerPoint = Number(action.payload.value)
        }
      }
      else{
            playerPoint = 11
      }
      if(aceCounter>0&&state.player.points+playerPoint>21){
        playerPoint = playerPoint-10
      }
      return { ...state, player: {points : state.player.points+playerPoint, cards:[...state.player.cards, action.payload]}};
    case ActionCardsTypes.GET_DEALER_CARD:
      let dealerPoint = 0
      const aceDCounter = state.dealer.cards.filter((card)=>card.value==="ACE").length
      if (action.payload.value!=="ACE"){
        if(/[a-zA-Z]/.test(action.payload.value)) {
          dealerPoint = 10 
        }
        else{
          dealerPoint = Number(action.payload.value)
        }
      }
      else{
        dealerPoint = 11
      }
      if(aceDCounter>0&&state.dealer.points+dealerPoint>21){
        dealerPoint = dealerPoint-10
      }
      return { ...state, dealer: {points : state.dealer.points+dealerPoint, cards:[...state.dealer.cards, action.payload]}};
      case ActionCardsTypes.CLEAR_CARDS:
        return { ...state, dealer: {points : 0, cards:[]},player: {points : 0, cards:[]}}; 
    default:
      return state;
  }
};
