import React, { Component } from "react";
import { View, TouchableOpacity, Text, PanResponder } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import RenderRating from "../Universal/StarRating";
import Menu from "./Menu";
import Reviews from "../Review/Reviews";
import Actions from "./Actions";
import { RestaurantDisplay, FocusStore } from "../../Redux";

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
      const restaurantDisplay = RestaurantDisplay.getState();
      this.setState({ showActions: restaurantDisplay });
      this.forceUpdate();
    });
  }

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
      // toggled = this.state.focusToggled;
      // if (gesture.dy > 0 && !toggled) {
      //   finishHeight = nearbyAllowed() ? nearbyHeight : restaurantHeight;
      //   focusHeight = toggled ? finishHeight : 60;
      //   newValue = focusHeight - gesture.dy;
      //   this.upAnim.setValue(newValue);
      // }
    },
    onPanResponderRelease: (event, gesture) => {
      FocusStore.dispatch({
        type: "update",
        payload: {
          dy: gesture.dy,
          checkThreshold: true,
        },
      });
      // if (gesture.dy !== 0)
      //   if (gesture.dy > 0 || !this.state.focusToggled)
      //     if (Math.abs(gesture.dy) > 20) this.renderFocus();
      //     else this.returnHeight();
    },
  });
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (this.props.data == undefined) return null;
    return (
      <View style={{ flex: 1 }}>
        <View
          {...this.panResponder.panHandlers}
          style={[{ zIndex: 5 }, u.white]}>
          <View style={[s.invisible, u.abs]}></View>
          <View style={[s.swipeUpper, u.abs, u.centerH]}></View>
          <Text style={[s.paddingLeft, s.textColor, s.largeText, s.title]}>
            {this.props.data.name}
          </Text>
          <View style={[s.starContainer, u.abs, s.paddingLeft]}>
            {RenderRating(this.props.data.rating, s.star.height)}
          </View>
          <Text style={[s.info, s.paddingLeft, s.textColor]}>
            {this.props.data.description}
          </Text>
        </View>
        <View style={[s.spacer, u.fullW, u.white, u.shadow, { zIndex: 2 }]} />
        {this.body(this.props, this.state.showActions)}
      </View>
    );
  }
}
