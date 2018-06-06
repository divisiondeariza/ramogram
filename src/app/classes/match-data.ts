export class MatchData {
    title: string;
    times: string[];
    sentiment: number[];
    key_times: KeyTimes;
  }

class KeyTimes{
	first_half:string;
	second_half:string;
}