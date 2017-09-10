import { StatisticsModel } from './statisticsModel';
export class StandingsModel {
    position: number;
    teamName: string;
    crestURI: string;
    playedGames: number;
    points: number;
    goals: number;
    goalsAgainst: number;
    goalDifference: number;
    wins: number;
    draws: number;
    losses: number;

    home: StatisticsModel;
    away: StatisticsModel;

}