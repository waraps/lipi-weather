import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

// icons
import { Ionicons } from "@expo/vector-icons";

interface IInputSearch {
  value: string;
  onChangeText: (city: string) => void;
}

export const InputSearch = (props: IInputSearch): React.JSX.Element => {
  const { value, onChangeText } = props;

  const clearText = (): void => onChangeText("");

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Ionicons name="ios-search" size={20} color="#9EB1CD" />
        <TextInput
          style={styles.input}
          cursorColor={"#718096"}
          onChangeText={onChangeText}
          value={value}
          placeholder="type a location .."
        />
      </View>
      {value.length > 0 ? (
        <TouchableOpacity style={{ marginRight: 15 }} onPress={clearText}>
          <Ionicons name="ios-close" size={25} color="#9EB1CD" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#CEDCEB",
    borderRadius: 18,
    padding: 5,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    width: "92%",
  },
  input: {
    height: 45,
    padding: 5,
    width: "98%",
    margin: 0,
    color: "#243C79",
  },
});
