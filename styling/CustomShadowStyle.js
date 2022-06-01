import { StyleSheet} from "react-native";

export default StyleSheet.create({
  defaultShadow: {
    //IOS
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    //android
    elevation: 12,
  },
});
