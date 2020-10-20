import { Team } from 'common/models/team';

export interface IHomeState {
  isLoading: boolean;
  errorMessage: string;
  leagues: Array<string>;
  currentLeague: string;
  teams: Array<Team>;
}
