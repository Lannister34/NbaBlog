import {
  HOME_CHANGE_CURRENT_LEAGUE,
  HOME_LEAGUES_REQUEST,
  HOME_TEAM_REQUEST,
  HOME_TEAMS_REQUEST,
  teamRequestAction,
  teamsRequestAction,
} from './actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  requestFailure,
  leaguesRequestSuccess,
  loadingStatus,
  teamsRequestSuccess,
  teamRequestSuccess,
} from 'containers/Home/actions';

import { leagueService } from 'api/services/leagueService';
import { Team } from 'common/models/team';
import { teamService } from 'api/services/teamService';

function* getLeagues() {
  yield put(loadingStatus(true));
  try {
    const leagues: Array<string> = yield call(leagueService.getAllLeagues);
    yield put(leaguesRequestSuccess(leagues));
  } catch (e) {
    yield put(requestFailure('Something went wrong. Please try again later.'));
  } finally {
    yield put(loadingStatus(false));
  }
}

function* watchGetLeagues() {
  yield takeLatest(HOME_LEAGUES_REQUEST, getLeagues);
}

function* getTeams(action: teamsRequestAction) {
  const { league } = action.payload;
  yield put(loadingStatus(true));
  try {
    const teams: Array<Team> = yield call(teamService.getTeamsByLeague, league);
    yield put(teamsRequestSuccess(teams));
  } catch (e) {
    yield put(requestFailure('Something went wrong. Please try again later.'));
  } finally {
    yield put(loadingStatus(false));
  }
}

function* watchGetTeams() {
  yield takeLatest(HOME_TEAMS_REQUEST, getTeams);
}

function* getTeam(action: teamRequestAction) {
  const { id } = action.payload;
  yield put(loadingStatus(true));
  try {
    const team: Team = yield call(teamService.getTeamById, id);
    yield put(teamRequestSuccess(team));
  } catch (e) {
    yield put(requestFailure('Something went wrong. Please try again later.'));
  } finally {
    yield put(loadingStatus(false));
  }
}

function* watchGetTeam() {
  yield takeLatest(HOME_TEAM_REQUEST, getTeam);
}

function* watchChangeCurrentLeague() {
  yield takeLatest(HOME_CHANGE_CURRENT_LEAGUE, getTeams);
}

export default function* homeSagas() {
  yield all([watchGetLeagues(), watchGetTeams(), watchGetTeam(), watchChangeCurrentLeague()]);
}
