import { useCallback, useEffect, useState } from "react";
import { getWeather } from "../api";
import { IWeatherRes } from "../interfaces";

interface IReturnProps {
  loading: boolean;
  data?: IWeatherRes;
  error?: string;
}

const initialState: IReturnProps = {
  loading: false,
  data: undefined,
  error: undefined,
};

export function useFetchWeather(
  lat?: string,
  lon?: string
): IReturnProps & { fetchData: () => void; resetState: () => void } {
  const [state, setState] = useState<IReturnProps>(initialState);

  const fetchData = useCallback((): void => {
    setState({
      ...state,
      loading: true,
    });

    if (lat && lon) {
      getWeather(lat, lon)
        .then((response) => {
          setState({
            ...state,
            data: response,
            loading: false,
          });
        })
        .catch((error) => {
          setState({
            ...state,
            error: String(error),
            loading: false,
          });
        });
    }
  }, []);

  const resetState = (): void => setState(initialState);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    fetchData,
    resetState,
  };
}
