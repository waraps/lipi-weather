import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export const LoadingDetails = (): React.JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={40} color={"#243C79"} />
      <Text style={{ marginTop: 5, fontSize: 14, color: "#243C79" }}>
        Loading results ..
      </Text>
    </View>
  );
};
