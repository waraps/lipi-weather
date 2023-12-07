import { IPlaceRes, IWeatherRes } from "../interfaces";

export const getPlaces = async (
  address: string,
  limit = 10
): Promise<IPlaceRes[]> => {
  // in this endpoint, set the limit param to 10 helps to improve the endpoint call and reduce a bit the response
  // but, just in case and if we need more results in the response, this param can be modified
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_GEOCODING_URL}?q=${address}&limit=${limit}&appid=${process.env.EXPO_PUBLIC_API_KEY}`
  );
  return await response.json();
};

export const getWeather = async (
  lat: string,
  lon: string
): Promise<IWeatherRes> => {
  // in this endpoint hourly and minutely data is excluded because are not needed
  // this helps to improve the endpoint call and reduce a bit the response
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return await response.json();
};
