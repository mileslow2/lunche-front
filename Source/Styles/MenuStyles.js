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
  categoriesButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 20,
    borderRadius: 75,
  },
  categoryButtonText: {
    color: "#8F8F8F",
    fontSize: 18,
    paddingRight: 5,
    fontWeight: "bold",
  },
  categoryChooserBackground: {
    height: h,
    width: w,
    backgroundColor: "rgba(156, 156, 156, 0.5)",
  },
  screenCover: {
    backgroundColor: "rgba(156, 156, 156, 0.5)",
    height: h,
    width: w,
  },
  foodDesc: {
    color: "#575757",
    fontSize: 14,
    paddingTop: 5,
    zIndex: 2,
    // paddingBottom: 30,
  },
  foodImage: {
    width: h / 11,
    height: h / 11,
    borderRadius: h / 5.5,
  },
  foodPrice: {
    color: "rgb(83, 204, 151)",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "bold",
    right: 0,
    position: "absolute",
    right: w / 30,
    bottom: 6,
  },
  foodItem: {
    width: w - w / 10,
    borderRadius: 18,
    paddingTop: 10,
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingBottom: 10,
    height: 105,
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
  modalView: {
    height: h / 2.2,
    width: w,
    bottom: 0,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 50,
    padding: 15,
    elevation: 2,
  },
  categoryHeaderContainer: {
    padding: 14,
    borderRadius: 25,
    bottom: 20,
  },
  modalList: {
    height: h / 2.44,
    width: w,
  },
  modalCategory: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  modalNormalWidth: {
    maxWidth: w - w / 3.5,
  },
  modalHighlightWidth: {
    maxWidth: w - w / 4,
  },
  modalCategoryName: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalCategoryAmount: {
    color: "#707070",
    right: 14,
    top: 14,
    position: "absolute",
  },

  categoryHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#707070",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
