import React, { Component } from "react";
import { View, Text, TouchableOpacity, PanResponder } from "react-native";
import s from "../../Styles/NearbyStyles";
import u from "../../Styles/UniversalStyles";
import NearbyList from "./NearbyList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FocusStore } from "../../Redux";

export default class Nearby extends Component {
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      FocusStore.dispatch({
        type: "update",
        payload: {
          dy: gesture.dy,
          checkThreshold: false,
        },
      });
    },
    onPanResponderRelease: (event, gesture) => {
      FocusStore.dispatch({
        type: "update",
        payload: {
          dy: gesture.dy,
          checkThreshold: true,
        },
      });
    },
  });

  render() {
    renderFilter = this.props.toggled ? (
      <TouchableOpacity style={[u.shadow, s.filterButton, u.white, u.abs]}>
        <MaterialCommunityIcons
          name={"filter-variant"}
          size={30}
          color={"#cbcbcb"}
          style={s.filterButtonIcon}
        />
      </TouchableOpacity>
    ) : null;
    return (
      <View
        {...this.panResponder.panHandlers}
        style={{ height: this.props.correctHeight }}>
        <View style={[s.invisible, u.abs]}></View>
        <View style={[s.swipeUpper, u.abs, u.centerH]}></View>
        <Text style={s.text}>Nearby Food Trucks</Text>
        {renderFilter}
        <NearbyList
          loc={this.props.loc}
          restaurants={this.props.restaurants}
          fromSearch={false}
        />
      </View>
    );
  }
}
