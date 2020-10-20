import api from 'api/api';
import { Team } from 'common/models/team';

export class TeamService {
  static endpoint = '/teams';

  async getTeamsByLeague(league: string): Promise<Array<Team>> {
    //const response = await api.get(LeagueService.endpoint + `/${league}`);
    const response = {
      api: {
        status: 200,
        message: 'GET leagues/',
        results: 7,
        filters: ['teamId', 'league', 'city', 'shortName', 'nickName', 'confName', 'divName'],
        teams: [
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '1',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '2',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '3',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '4',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '5',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '6',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '7',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
        ],
      },
    };

    return response.api.teams;
  }

  async getTeamById(id: string): Promise<Team> {
    //const response = await api.get(LeagueService.endpoint + `/teamId/${id}`);
    const response = {
      api: {
        status: 200,
        message: 'GET teams/teamId/1',
        results: 1,
        filters: ['teamId', 'league', 'city', 'shortName', 'nickName', 'confName', 'divName'],
        teams: [
          {
            city: 'Atlanta',
            fullName: 'Atlanta Hawks',
            teamId: '1',
            nickname: 'Hawks',
            logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png',
            shortName: 'ATL',
            allStar: '0',
            nbaFranchise: '1',
            leagues: {
              standard: {
                confName: 'East',
                divName: 'Southeast',
              },
            },
          },
        ],
      },
    };
    return response.api.teams[0];
  }
}

export const teamService = new TeamService();
