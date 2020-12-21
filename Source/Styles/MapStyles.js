import { StyleSheet } from "react-native";
const emerald = "rgb(83, 204, 151)";

export default s = StyleSheet.create({
  container: {
    width: 100 + "%",
    height: 100 + "%",
  },
  marker: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 28,
    bottom: 70,
    right: 20,
  },
  icon: {
    top: 12,
    right: 2,
    width: 35,
    height: 35,
    tintColor: emerald,
  },
});
