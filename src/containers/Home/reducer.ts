import { IHomeState } from './interfaces';
import {
  HOME_LEAGUES_REQUEST_SUCCESS,
  HOME_LOADING_STATUS,
  HOME_REQUEST_FAILURE,
  HOME_TEAMS_REQUEST_SUCCESS,
  HomeActionTypes,
} from './actionTypes';

const initialState: IHomeState = {
  isLoading: false,
  errorMessage: '',
  leagues: [],
  currentLeague: '',
  teams: [],
};

export function HomeReducer(state: IHomeState = initialState, action: HomeActionTypes): IHomeState {
  switch (action.type) {
    case HOME_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case HOME_REQUEST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case HOME_LEAGUES_REQUEST_SUCCESS:
      return {
        ...state,
        leagues: action.payload.leagues,
      };
    case HOME_TEAMS_REQUEST_SUCCESS:
      return {
        ...state,
        teams: action.payload.teams,
      };
    default:
      return state;
  }
}
