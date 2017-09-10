export class ApiHelpers {
    static baseUrl: string = 'http://api.football-data.org/v1';

    static mainRoutes = {
        competitions: <string>'/competitions',
        fixtures: <string>'/fixtures',
        teams: <string>'/teams',
    }

    static availableCompetitionIds = {
        brazilSerieA: <number>444,
        englishPremierLeague: <number>445,
        englishChampionship: <number>446,
        englishLeagueOne: <number>447,
        englishLeagueTwo: <number>448,
        netherlandsEredivisie: <number>449,
        frenchLeagueOne: <number>450,
        frenchLeagueTwo: <number>451,
        germanBundesliga: <number>452,
        germanBundesligaTwo: <number>453,
        spanishPrimeraDivision: <number>455,
        italianSerieA: <number>456,
        italianSerieB: <number>459,
        portugalPrimeiraLiga: <number>457,
        championsLeague: <number>464
    }

    static getHeaders(): Object{
        return {
            'Content-type': <string> 'text/plain',
            'X-Auth-Token': <string> 'ca9d984a4c1e4042b295f4eaa19b122e',
            'X-Response-Control': <string> 'minified'
        }
    }

    static competitionUrls(id?: number): Object | string {
        if (id) {
            return {
                competitionTeams: <string> this.baseUrl + this.mainRoutes.competitions + `/${id}` + this.mainRoutes.teams,
                competitionLeagueTable: <string> this.baseUrl + this.mainRoutes.competitions + `/${id}/leagueTable`,
                competitionFixtures: <string> this.baseUrl + this.mainRoutes.competitions + `/${id}` + this.mainRoutes.fixtures
            }
        }

        // If no id provided return all competitions url http://api.football-data.org/v1/competitions
        return this.baseUrl + this.mainRoutes.competitions + '?season=2017';
    }

    static otherUrls(id?: number): Object | string {
        if (id) {
            return {
                oneFixture: <string> this.baseUrl + this.mainRoutes.fixtures + `/${id}`,
                allFixturesCertainTeam: <string> this.baseUrl + this.mainRoutes.teams + `/${id}` + this.mainRoutes.fixtures,
                oneTeam: <string> this.baseUrl + this.mainRoutes.teams + `/${id}`,
                allPlayersCertainTeam: <string> this.baseUrl + this.mainRoutes.teams + `/${id}/players`
            }
        }

        // If no id provided return all fixtures url http://api.football-data.org/v1/fixtures
        return this.baseUrl + this.mainRoutes.fixtures;
    }

}