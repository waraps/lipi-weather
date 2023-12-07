import { ICurrent, IDaily } from "../generics";

export interface IWeatherRes {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  daily: IDaily[];
}
