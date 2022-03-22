export enum ActionGameTypes {
  SET_START = "SET_START",
  SET_ROUND = "SET_ROUND",
  SET_BET = "SET_BET",
  SET_CASH = "SET_CASH",
  SET_RESULT = "SET_RESULT",
  MAKE_SUMMARY = "MAKE_SUMMARY",
  DELETE_BET = "DELETE_BET",
  CLEAR_BET = "CLEAR_BET",
  DOUBLE_BET = "DOUBLE_BET",
  SET_INSURANCE = "SET_INSURANCE",
  ADD_INSURANCE = "ADD_INSURANCE",
}

interface SettingStart {
  type: ActionGameTypes.SET_START;
}
interface SettingRound {
  type: ActionGameTypes.SET_ROUND;
}
interface SettingBet {
  type: ActionGameTypes.SET_BET;
  payload: number;
}
interface SettingCash {
  type: ActionGameTypes.SET_CASH;
  payload: number;
}
interface SettingResult {
  type: ActionGameTypes.SET_RESULT;
  payload: "player" | "dealer" | "draw";
}
interface MakingSummary {
  type: ActionGameTypes.MAKE_SUMMARY;
}

interface DeletingBet {
  type: ActionGameTypes.DELETE_BET;
  payload: number;
}
interface ClearingBet {
  type: ActionGameTypes.CLEAR_BET;
}
interface DoublingingBet {
  type: ActionGameTypes.DOUBLE_BET;
}
interface SettingInsurance {
  type: ActionGameTypes.SET_INSURANCE;
}
interface AddingInsurance {
  type: ActionGameTypes.ADD_INSURANCE;
}
export type gameAction =
  | SettingStart
  | SettingInsurance
  | SettingRound
  | SettingBet
  | SettingCash
  | SettingResult
  | MakingSummary
  | DeletingBet
  | ClearingBet
  | DoublingingBet
  | AddingInsurance
