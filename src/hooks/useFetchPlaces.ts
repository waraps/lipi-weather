import { useCallback, useEffect, useState } from "react";
import { IPlaceRes } from "../interfaces";
import { getPlaces } from "../api";

interface IReturnProps {
  loading: boolean;
  data?: IPlaceRes[];
  error?: string;
}

const initialState: IReturnProps = {
  loading: false,
  data: undefined,
  error: undefined,
};

export function useFetchPlaces(
  address: string
): IReturnProps & { resetState: () => void } {
  const [state, setState] = useState<IReturnProps>(initialState);

  const fetchData = useCallback((): void => {
    setState({
      ...state,
      loading: true,
    });

    getPlaces(address)
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
  }, [address]);

  const resetState = (): void => setState(initialState);

  // this effect helps to perform the search location each time the user type in the input
  useEffect(() => {
    // debouncing api calls to improve the request performance
    const timer = setTimeout(() => {
      if (address.length > 0) {
        fetchData();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [address]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    resetState,
  };
}
