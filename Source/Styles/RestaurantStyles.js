import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
function r(n) {
  return Math.round(n);
}
const largeText = r(height / 35.84);
export default s = StyleSheet.create({
  title: {
    marginTop: r(largeText / 3.5),
    fontWeight: "bold",
  },
  starContainer: {
    width: largeText * 2,
    marginTop: r(largeText / 0.73),
  },
  swipeUpper: {
    width: 80,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#cbcbcb",
    top: -9,
    zIndex: 5,
  },
  invisible: {
    height: 50,
    width,
    top: -20,
  },
  paddingLeft: {
    paddingLeft: r(largeText / 1.47),
  },
  info: {
    fontSize: r(largeText / 1.25),
    marginTop: r(largeText / 0.9),
  },
  textColor: {
    color: "#6b6b6b",
  },
  largeText: {
    fontSize: largeText,
    fontWeight: "500",
  },
  star: {
    height: r(largeText / 0.926),
  },
  spacer: {
    height: 30 + (r > 23 ? 0 : 10),
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    bottom: 20,
  },
});
