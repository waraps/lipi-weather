import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// icons
import { Ionicons } from "@expo/vector-icons";

// interfaces
import { IPlaceRes } from "../../interfaces";

interface IRow {
  item: IPlaceRes;
}

export const Row = (props: IRow): React.JSX.Element => {
  const { name, state, country, lat, lon } = props.item;
  const router = useRouter();

  const gotToDetails = (): void => {
    router.push({
      pathname: "/city",
      params: { name, state, country, lat, lon },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={gotToDetails}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {state}, {country}
        </Text>
      </View>
      <Ionicons name="arrow-forward-outline" size={18} color="#718096" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#718096",
  },
  title: {
    fontSize: 16,
    color: "#243C79",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#718096",
  },
});
