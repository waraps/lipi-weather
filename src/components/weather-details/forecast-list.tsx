import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { fromUnixTime, format, isToday } from "date-fns";

// icons
import { Fontisto } from "@expo/vector-icons";

// interfaces
import { IDaily } from "../../interfaces";

// utils
import { formatUnixToDay } from "../../utils";

interface IForecastList {
  info: IDaily[];
}

interface IForecastItem {
  item: IDaily;
}

export const ForecastList = ({ info }: IForecastList): React.JSX.Element => {
  const ForecastItem = useCallback(
    ({ item }: IForecastItem): React.JSX.Element => {
      return (
        <View style={styles.card}>
          <View style={{ width: "33%" }}>
            <Text style={[styles.text, { textAlign: "left" }]}>
              {formatUnixToDay(item.dt)}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconSection}>
              <Fontisto name="blood-drop" size={12} color="#2D3748" />
              <Text style={styles.text}> {item.humidity}%</Text>
            </View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: `${process.env.EXPO_PUBLIC_ICON_URL}/${item.weather[0].icon}@2x.png`,
              }}
            />
          </View>
          <View style={{ width: "33%" }}>
            <Text style={[styles.text, { textAlign: "right" }]}>
              {item.temp.min.toFixed(2)}&deg;/
              {item.temp.max.toFixed(2)}&deg;
            </Text>
          </View>
        </View>
      );
    },
    [info]
  );

  return (
    <View style={styles.container}>
      {/* only needs to show the first 8 values (today and the following 7 days) */}
      {info.splice(0, 8).map((item) => (
        <ForecastItem key={item.dt} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 0.5,
    backgroundColor: "#CEDCEB",
    borderRadius: 8,
    marginVertical: 2,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  text: {
    color: "#2D3748",
    textAlign: "right",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "33%",
  },
  iconSection: {
    flexDirection: "row",
    alignItems: "center",
  },
});
