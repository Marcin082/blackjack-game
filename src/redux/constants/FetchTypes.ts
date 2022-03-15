export enum ActionFetchTypes {
    FETCH_USERS_REQUEST='FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'
};
interface FetchingRequest{
    type: ActionFetchTypes.FETCH_USERS_REQUEST
}
interface FetchingSucces {
    type: ActionFetchTypes.FETCH_USERS_SUCCESS;
}
interface FetchingFailure {
    type: ActionFetchTypes.FETCH_USERS_FAILURE;
    payload:any
}
export type fetchAction =  FetchingRequest | FetchingSucces | FetchingFailure;
