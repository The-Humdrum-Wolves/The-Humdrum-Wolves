export interface ChampionshipRankings {
    leagueCaption: string,
    matchday: number,
    // standing: any;
    standing: {
        // _links: {
        //     team: {
        //         href: string;
        //     }
        // };
        position: number,
        teamName: string,
        crestURI: string,
        playedGames: number,
        points: number,
        goals: number,
        goalsAgainst: number,
        goalDifference: number,
        wins: number,
        draws: number,
        losses: number,
    }[];
}