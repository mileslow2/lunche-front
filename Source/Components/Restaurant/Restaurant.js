import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import RenderRating from "../Universal/StarRating";
import Menu from "./Menu";
import Reviews from "../Review/Reviews";
import Actions from "./Actions";
import { RestaurantDisplay } from "../../Redux";

export default class Restaurant extends Component {
  state = {
    showActions: true,
  };

  body(props, showActions) {
    if (showActions) {
      return <Actions data={props.data} />;
    } else {
      return <Menu props={props} />;
    }
  }

  componentDidMount() {
    this.unsubscribe = RestaurantDisplay.subscribe(() => {
      restaurantDisplay = RestaurantDisplay.getState();
      this.setState({ showActions: restaurantDisplay });
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.props.data == undefined) return null;
    return (
      <View>
        <View style={[{ zIndex: 5 }, u.white]}>
          <Text style={[s.paddingLeft, s.textColor, s.largeText, s.title]}>{this.props.data.name}</Text>
          <View style={[s.starContainer, u.abs, s.paddingLeft]}>{RenderRating(this.props.data.rating, s.star.height)}</View>
          <Text style={[s.info, s.paddingLeft, s.textColor]}>{this.props.data.description}</Text>
        </View>
        <View style={[s.spacer, u.fullW, u.white, u.shadow, { zIndex: 2 }]} />
        {this.body(this.props, this.state.showActions)}
      </View>
    );
  }
}
