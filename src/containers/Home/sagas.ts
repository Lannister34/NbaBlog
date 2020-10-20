import { HOME_LEAGUES_REQUEST, HOME_TEAMS_REQUEST, teamsRequestAction } from './actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { requestFailure, leaguesRequestSuccess, loadingStatus, teamsRequestSuccess } from 'containers/Home/actions';

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

export default function* homeSagas() {
  yield all([watchGetLeagues(), watchGetTeams()]);
}
