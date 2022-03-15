import { ActionFetchTypes, fetchAction } from "../constants/FetchTypes"

const initialState = {
    loading: false,
    error: ''
}

export const fetchReducer = (state = initialState, action:fetchAction) => {
  switch (action.type) {
    case ActionFetchTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionFetchTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: ''
      }
    case ActionFetchTypes.FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload
      }
    default: return state
  }
}
