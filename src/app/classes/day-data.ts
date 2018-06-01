export class DayData {
	  date: string;
      sentiment: number;
      character: string;
      adjectives: string[];
      match_data?: MatchData;
    }

class MatchData {
    title: string;
    times: string[];
    sentiment: number[];
    key_times: KeyTimes;
  }

class KeyTimes{
	first_half:string;
	second_half:string;
}