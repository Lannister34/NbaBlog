import api from 'api/api';

export class LeagueService {
  static endpoint = '/leagues';

  async getAllLeagues(): Promise<Array<string>> {
    //const response = await api.get(LeagueService.endpoint);
    const response = {
      api: {
        status: 200,
        message: 'GET leagues/',
        results: 6,
        filters: [],
        leagues: ['standard', 'africa', 'sacramento', 'vegas', 'utah', 'orlando'],
      },
    };

    return response.api.leagues;
  }
}

export const leagueService = new LeagueService();
