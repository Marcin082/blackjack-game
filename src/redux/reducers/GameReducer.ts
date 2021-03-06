import { gameAction, ActionGameTypes } from '../constants/GameTypes'
const intialState = {
  gameStart: false,
  roundStart: false,
  cash: 1500,
  bet: 0,
  result: undefined,
  chips: []
}
interface State {
  gameStart: boolean;
  roundStart: boolean;
  cash: number;
  bet: number;
  result: 'player' | 'dealer' | 'draw' | undefined;
  chips: string[];
}

export const gameReducer = (
  state: State = intialState,
  action: gameAction
): State => {
  switch (action.type) {
    case ActionGameTypes.SET_START:
      return { ...state, gameStart: true }
    case ActionGameTypes.SET_ROUND:
      return { ...state, roundStart: true }
    case ActionGameTypes.SET_BET:
      return {
        ...state,
        bet: state.bet + action.payload,
        chips: [...state.chips, String(action.payload)]
      }
    case ActionGameTypes.SET_CASH:
      return { ...state, cash: state.cash + action.payload }
    case ActionGameTypes.SET_INSURANCE:
      return { ...state, cash: state.cash - state.bet / 2 }
    case ActionGameTypes.ADD_INSURANCE:
      return { ...state, cash: state.cash + state.bet }
    case ActionGameTypes.DOUBLE_BET:
      return { ...state, cash: state.cash - state.bet, bet: state.bet * 2 }
    case ActionGameTypes.SET_RESULT:
      return { ...state, result: action.payload }
    case ActionGameTypes.DELETE_BET:
      state.chips.pop()
      return { ...state, cash: state.cash - action.payload, bet: state.bet + action.payload, chips: state.chips }
    case ActionGameTypes.CLEAR_BET:
      return { ...state, bet: 0, cash: state.cash + state.bet, chips: [] }
    case ActionGameTypes.MAKE_SUMMARY:
      // eslint-disable-next-line no-case-declarations
      let money = 0
      if (state.result === 'player') {
        money = 2 * state.bet
      } else if (state.result === 'draw') {
        money = state.bet
      }
      return {
        ...state,
        roundStart: false,
        cash: state.cash + money,
        bet: 0,
        result: undefined,
        chips: []
      }
    default:
      return state
  }
}
