import { ActionGameTypes } from "../constants/GameTypes";

export const setStart = () => {
    return {
    type: ActionGameTypes.SET_START,
    };
}; 
export const setResult = (winner:'player' | 'dealer' |'draw') => {
  return {
  type: ActionGameTypes.SET_RESULT,
  payload:winner
  };
};
export const setRound = () => {
  return {
  type: ActionGameTypes.SET_ROUND,
  };
};
export const setBet = (value:number) => {
  return {
  type: ActionGameTypes.SET_BET,
  payload:value
  };
};
export const setInsurance = () => {
  return {
  type: ActionGameTypes.SET_INSURANCE,
  };
};
export const makeSummary = () => {
  return {
  type: ActionGameTypes.MAKE_SUMMARY,
  };
};
export const setCash = (value:number) => {
  return {
  type: ActionGameTypes.SET_CASH,
  payload:value
  };
};
export const deleteBet = (value:number) => {
  return {
  type: ActionGameTypes.DELETE_BET,
  payload:value
  };
};
export const clearBet = () => {
  return {
  type: ActionGameTypes.CLEAR_BET,
  };
};
export const doubleBet = () => {
  return {
  type: ActionGameTypes.DOUBLE_BET,
  };
};
