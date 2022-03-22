import { ActionCardsTypes } from "../constants/CardsTypes";
import axios from "axios";
import { Card } from "../../types/types";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./FetchActions";

export const clearCards = () => {
  return {
    type: ActionCardsTypes.CLEAR_CARDS,
  };
};
export const getDealerCard = (id: string) => {
  return function (dispatch: any) {
    dispatch(fetchUsersRequest());
    axios
      .get<Card>(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
      .then((response) => {
        dispatch({
          type: ActionCardsTypes.GET_DEALER_CARD,
          payload: response.data.cards[0],
        });
        dispatch(fetchUsersSuccess());
      })
      .catch((error: any) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const getPlayerCard = (id: string) => {
  return function (dispatch: any) {
    dispatch(fetchUsersRequest());
    axios
      .get<Card>(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
      .then((response) => {
        dispatch({
          type: ActionCardsTypes.GET_PLAYER_CARD,
          payload: response.data.cards[0],
        });
        dispatch(fetchUsersSuccess());
      })
      .catch((error: any) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
