import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default s = StyleSheet.create({
  foodName: {
    color: "#575757",
    fontSize: 20,
    paddingTop: 5,
    zIndex: 2,
    fontWeight: "bold",
    // paddingBottom: 30,
  },
  sectionHeader: {
    color: "#7a7a7a",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: w / 50,
  },
  foodDesc: {
    color: "#575757",
    fontSize: 14,
    paddingTop: 5,
    zIndex: 2,
    width: w - w / 3,
    // paddingBottom: 30,
  },
  foodPrice: {
    color: "rgb(83, 204, 151)",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "bold",
  },
  foodItem: {
    width: w - w / 10,
    borderRadius: 18,
    paddingTop: 10,
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  listImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 8,
    left: 8,
  },
  itemContainer: {
    height: 50,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: 20,
  },
  shadowCover: {
    top: -5,
    height: 10,
    paddingTop: 0,
  },
  itemText: {
    color: "#5c5c5c",
    fontSize: 20,
    left: 14,
    fontWeight: "bold",
    bottom: 8,
  },
  distanceText: {
    top: 27,
    right: 20,
    fontSize: 18,
    color: "#5c5c5c",
  },

  bottomHeaderShadowCover: {
    height: 20,
    bottom: 25,
    zIndex: 2,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    zIndex: 20,
    right: 20,
    marginTop: 13,
  },
  filterButtonIcon: {
    top: 5,
    marginLeft: 5,
  },
});
