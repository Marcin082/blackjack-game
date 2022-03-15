import { SingleCard } from "../../types/types";

export enum ActionCardsTypes{
    GET_PLAYER_CARD = 'GET_PLAYER_CARD',
    GET_DEALER_CARD = 'GET_DEALER_CARD',
    CLEAR_CARDS = 'CLEAR_CARDS',
};
interface GettingCard{
    type: ActionCardsTypes.GET_PLAYER_CARD | ActionCardsTypes.GET_DEALER_CARD;
    payload:SingleCard;
}
interface ClearingCards {
    type: ActionCardsTypes.CLEAR_CARDS;
}

export type cardsAction =  GettingCard | ClearingCards ;
