
import { MatchData } from './match-data'

export class DayData {
	  date: string;
      sentiment: number;
      character: {id: string, name: string };
      adjectives: string[];
      match_data?: MatchData;
    }

