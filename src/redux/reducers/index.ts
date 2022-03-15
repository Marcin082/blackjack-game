import { combineReducers } from "redux";
import { cardsReducer } from "./CardReducer";
import { fetchReducer } from "./FetchReducer";
import { gameReducer } from "./GameReducer";
const reducers = combineReducers({
  cards: cardsReducer,
  game: gameReducer,
  fetch: fetchReducer
});
export type RootState = ReturnType<typeof reducers>

export default reducers;