import React, { Component } from "react";
import { View } from "react-native";
import { Store, FromSearch } from "../../Redux";
import Nearby from "../Nearby/Nearby";
import Restaurant from "../Restaurant/Restaurant";
var store, returnValue;

// basically this decides whether or not the main
// tab thingy that comes from the bottom is showcasing
// a restaurant or the nearby restaurants screen

export function nearbyAllowed() {
  store = Store.getState();
  returnValue = store == undefined || typeof store == "boolean" || store.key == -1;
  if (FromSearch.getState()) {
    returnValue = false;
    FromSearch.dispatch({ type: "update", payload: false });
  }

  return returnValue;
}

export default class Decide extends Component {
  render() {
    const data = this.props.data;
    if (nearbyAllowed()) {
      return (
        <View style={{ height: data.nearbyHeight }}>
          <Nearby render={this.props.render} restaurants={data.restaurants} loc={data.loc} correctHeight={data.correctHeight} toggled={this.props.nearby} />
        </View>
      );
    }
    const store = Store.getState();
    return (
      <View style={{ height: data.restaurantHeight }}>
        <Restaurant data={data.restaurants[store.key]} />
      </View>
    );
  }
}
