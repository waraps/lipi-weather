import { IconConstants } from "../constants";

import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const getWeatherIcon = (
  name: IconConstants
): React.JSX.Element | null => {
  switch (name) {
    case IconConstants.FEELS_LIKE:
      return <FontAwesome5 name="temperature-low" size={24} color="#CCC" />;
    case IconConstants.HUMIDITY:
      return <Fontisto name="blood-drop" size={24} color="#CCC" />;
    case IconConstants.PRESSURE:
      return <AntDesign name="dashboard" size={24} color="#CCC" />;
    case IconConstants.WIND:
      return <Feather name="wind" size={24} color="#CCC" />;
    case IconConstants.VISIBILITY:
      return <AntDesign name="eye" size={24} color="#CCC" />;
    default:
      return null;
  }
};
