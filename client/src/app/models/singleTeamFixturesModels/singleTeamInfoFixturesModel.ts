import { ResultModel } from './resultModel';
export class SingleTeamInfoFixturesModel{
    date: string;
    status: string;
    matchday: number;

    homeTeamName: string;
    awayTeamName: string;
    results: ResultModel;

}