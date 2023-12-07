import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// interfaces
import { ICurrent } from "../../interfaces";
import { IconConstants } from "../../constants";

// utils
import { getWeatherIcon } from "../../utils";

interface ICardDetails {
  info: ICurrent;
}

interface IDetailsItem {
  icon: IconConstants;
  value: string;
  title: string;
}

export const CardDetails = ({ info }: ICardDetails): React.JSX.Element => {
  const {
    weather,
    temp,
    feels_like,
    humidity,
    pressure,
    wind_speed,
    visibility,
  } = info;

  const DetailsItem = useCallback((props: IDetailsItem): React.JSX.Element => {
    const { icon, value, title } = props;

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: 5 }}>{getWeatherIcon(icon)}</View>
        <Text
          style={[styles.itemText, { fontSize: 12, textTransform: "none" }]}
        >
          {value}
        </Text>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.currentWeatherSection}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `${process.env.EXPO_PUBLIC_ICON_URL}/${weather[0].icon}@2x.png`,
          }}
        />
        <View>
          <Text style={[styles.text, { fontSize: 28, fontWeight: "bold" }]}>
            {temp.toFixed(2)} &deg;C
          </Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {weather[0].main}
          </Text>
          <Text style={styles.text}>{weather[0].description}</Text>
        </View>
      </View>
      <View style={styles.detailsWeatherSection}>
        <DetailsItem
          icon={IconConstants.FEELS_LIKE}
          value={`${feels_like.toFixed(2)} °`}
          title={"Feels like"}
        />
        <DetailsItem
          icon={IconConstants.WIND}
          value={`${wind_speed} m/s`}
          title={"Wind"}
        />
        <DetailsItem
          icon={IconConstants.HUMIDITY}
          value={`${humidity} %`}
          title={"Humidity"}
        />
        <DetailsItem
          icon={IconConstants.PRESSURE}
          value={`${pressure} hPa`}
          title={"Pressure"}
        />
        <DetailsItem
          icon={IconConstants.VISIBILITY}
          value={`${(visibility / 1000).toFixed(2)} km`}
          title={"Visibility"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C77BE",
    padding: 16,
    borderRadius: 16,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  text: {
    color: "#CCC",
    textTransform: "capitalize",
    fontSize: 16,
  },
  currentWeatherSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsWeatherSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  itemText: {
    color: "#CCC",
    fontSize: 14,
    textTransform: "capitalize",
  },
});
