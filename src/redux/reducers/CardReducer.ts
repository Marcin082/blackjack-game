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
      if(action.payload.value==="ACE"){
          if(state.player.points+11<=21){
            playerPoint = 11
          }
          else{
            playerPoint = 1
          }
      }
      else {
        if(/[a-zA-Z]/.test(action.payload.value)) {
        playerPoint = 10 
        }
        else{
        playerPoint = Number(action.payload.value)
        }
      }
      
      return { ...state, player: {points : state.player.points+playerPoint, cards:[...state.player.cards, action.payload]}};
    case ActionCardsTypes.GET_DEALER_CARD:
      let dealerPoint = 0
      if(/[a-zA-Z]/.test(action.payload.value)) {
        dealerPoint = 10 
      }
      else if(action.payload.value==="ACE"){
        dealerPoint = 11 
      }
      else{
        dealerPoint = Number(action.payload.value)
      }
      console.log(dealerPoint)
      return { ...state, dealer: {points : state.dealer.points+dealerPoint, cards:[...state.dealer.cards, action.payload]}};
      case ActionCardsTypes.CLEAR_CARDS:
        return { ...state, dealer: {points : 0, cards:[]},player: {points : 0, cards:[]}}; 
    default:
      return state;
  }
};
