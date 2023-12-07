import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface IScreenHeader {
  title: string;
  subtitle: string;
  description: string;
}

export const ScreenHeader = (props: IScreenHeader): React.JSX.Element => {
  const { title, subtitle, description } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 18,
    color: "#2D3748",
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#718096",
    marginTop: -5,
  },
  headerDescription: {
    fontSize: 14,
    color: "#718096",
  },
});
