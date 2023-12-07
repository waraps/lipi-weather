import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";

// hooks
import { useFetchWeather } from "../../hooks";

// components
import {
  CardDetails,
  DetailsNotFound,
  ForecastList,
  LoadingDetails,
  ScreenHeader,
} from "../../components";

export default function CityScreen(): React.JSX.Element {
  const { name, state, country, lat, lon } = useLocalSearchParams<{
    name: string;
    state: string;
    country: string;
    lat: string;
    lon: string;
  }>();
  const { loading, data, error, fetchData } = useFetchWeather(lat, lon);

  if (loading) {
    return <LoadingDetails />;
  }

  if (!data || error) {
    return <DetailsNotFound onPress={fetchData} />;
  }

  const { current, daily } = data;
  const location: string = state && country ? `${state}, ${country}` : "";

  return (
    <ScrollView style={styles.container}>
      <ScreenHeader
        title={"Details"}
        subtitle={name ?? ""}
        description={location}
      />
      <CardDetails info={current} />
      <Text style={styles.forecastTitle}>Daily Forecast</Text>
      <ForecastList info={daily} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEDF7",
    paddingHorizontal: 8,
  },
  forecastTitle: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 18,
    textAlign: "center",
  },
});
