import { ActionFetchTypes } from "../constants/FetchTypes"

export const fetchUsersRequest = () => {
    return {
      type: ActionFetchTypes.FETCH_USERS_REQUEST
    }
  }
  export const fetchUsersSuccess =  () => {
    return {
      type: ActionFetchTypes.FETCH_USERS_SUCCESS,
    }
  }
  export const fetchUsersFailure = (error:any) => {
    return {
      type: ActionFetchTypes.FETCH_USERS_FAILURE,
      payload: error
    }
  }