import { Team } from 'common/models/team';

export const HOME_LOADING_STATUS = 'HOME_LOADING_STATUS';
export const HOME_REQUEST_FAILURE = 'HOME_REQUEST_FAILURE';

export const HOME_LEAGUES_REQUEST = 'HOME_LEAGUES_REQUEST';
export const HOME_LEAGUES_REQUEST_SUCCESS = 'HOME_LEAGUES_REQUEST_SUCCESS';

export const HOME_TEAMS_REQUEST = 'HOME_TEAMS_REQUEST';
export const HOME_TEAMS_REQUEST_SUCCESS = 'HOME_TEAMS_REQUEST_SUCCESS';

export interface loadingStatusAction {
  type: typeof HOME_LOADING_STATUS;
  payload: {
    isLoading: boolean;
  };
}

export interface requestFailureAction {
  type: typeof HOME_REQUEST_FAILURE;
  payload: {
    errorMessage: string;
  };
}

export interface leaguesRequestAction {
  type: typeof HOME_LEAGUES_REQUEST;
}

export interface leaguesRequestSuccessAction {
  type: typeof HOME_LEAGUES_REQUEST_SUCCESS;
  payload: {
    leagues: Array<string>;
  };
}

export interface teamsRequestAction {
  type: typeof HOME_TEAMS_REQUEST;
  payload: {
    league: string;
  };
}

export interface teamRequestSuccessAction {
  type: typeof HOME_TEAMS_REQUEST_SUCCESS;
  payload: {
    teams: Array<Team>;
  };
}

export type HomeActionTypes =
  | loadingStatusAction
  | leaguesRequestAction
  | requestFailureAction
  | leaguesRequestSuccessAction
  | teamsRequestAction
  | teamRequestSuccessAction;
