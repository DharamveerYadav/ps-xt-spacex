export interface IFilter {
    launchYear: number;
    launchSuccess: boolean;
    landSuccess: boolean;
  }


  export interface IProgram {
    image: string;
    missionName: string; 
    flightNumber: number;
    missionId: string[];
    launchYear: string;
    launchSuccess: string;
}
