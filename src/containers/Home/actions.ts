import {
  HOME_CHANGE_CURRENT_LEAGUE,
  HOME_LEAGUES_REQUEST,
  HOME_LEAGUES_REQUEST_SUCCESS,
  HOME_LOADING_STATUS,
  HOME_REQUEST_FAILURE,
  HOME_TEAM_REQUEST,
  HOME_TEAM_REQUEST_SUCCESS,
  HOME_TEAMS_REQUEST,
  HOME_TEAMS_REQUEST_SUCCESS,
  HomeActionTypes,
} from './actionTypes';
import { Team } from 'common/models/team';

export const loadingStatus = (isLoading: boolean): HomeActionTypes => ({
  type: HOME_LOADING_STATUS,
  payload: {
    isLoading,
  },
});

export const requestFailure = (errorMessage: string): HomeActionTypes => ({
  type: HOME_REQUEST_FAILURE,
  payload: {
    errorMessage,
  },
});

export const leaguesRequest = (): HomeActionTypes => ({
  type: HOME_LEAGUES_REQUEST,
});

export const leaguesRequestSuccess = (leagues: Array<string>): HomeActionTypes => ({
  type: HOME_LEAGUES_REQUEST_SUCCESS,
  payload: {
    leagues,
  },
});

export const teamsRequest = (league: string): HomeActionTypes => ({
  type: HOME_TEAMS_REQUEST,
  payload: {
    league,
  },
});

export const teamsRequestSuccess = (teams: Array<Team>): HomeActionTypes => ({
  type: HOME_TEAMS_REQUEST_SUCCESS,
  payload: {
    teams,
  },
});

export const teamRequest = (id: string): HomeActionTypes => ({
  type: HOME_TEAM_REQUEST,
  payload: {
    id,
  },
});

export const teamRequestSuccess = (team: Team): HomeActionTypes => ({
  type: HOME_TEAM_REQUEST_SUCCESS,
  payload: {
    team,
  },
});

export const changeCurrentLeague = (league: string): HomeActionTypes => ({
  type: HOME_CHANGE_CURRENT_LEAGUE,
  payload: {
    league,
  },
});
