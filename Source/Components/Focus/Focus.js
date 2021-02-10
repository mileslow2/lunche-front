import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import s from "../../Styles/FocusStyles";
import u from "../../Styles/UniversalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store, FocusChange, FocusStore } from "../../Redux";
import { debounce } from "debounce";
import Decide, { nearbyAllowed } from "./Decider";
import Nearby from "../Nearby/Nearby";
import { HamburgerHandler } from "../../Redux";
const { height } = Dimensions.get("screen");

//calculates the heights for nearby and restaurant screen based on screen size
const nearbyHeight = Math.round(height > 736 ? height * 0.9 : height * 0.95);
const restaurantHeight = Math.round(
  height > 736 ? height * 0.79 * 0.7 : height * 0.84 * 0.8
);

var finishHeight, focusHeight, toggled;

export default class Focus extends Component {
  state = {
    focusToggled: false,
    render: true,
  };

  upAnim = new Animated.Value(60);
  animHeight = new Animated.Value(height);

  //getting rid of potential memory leaks
  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.checkPage() && !this.state.focusToggled) {
        this.renderFocus();
      }
    }, 200);

    this.unsubscribe1 = FocusChange.subscribe(() => {
      if (FocusChange.getState()) {
        this.renderFocus();
        FocusChange.dispatch({ type: "update", payload: false });
      }
    });

    //controls height of the focus
    this.unsubscribe = FocusStore.subscribe(() => {
      const focusStore = FocusStore.getState();
      finishHeight = nearbyAllowed() ? nearbyHeight : restaurantHeight;
      focusHeight = this.state.focusToggled ? finishHeight : 60;
      if (focusStore.animated) {
        this.spring(focusHeight - focusStore.dy);
      } else {
        this.upAnim.setValue(focusHeight - focusStore.dy);
        if (focusStore.checkThreshold)
          if (focusStore.dy > 20 || !this.state.focusToggled)
            this.renderFocus();
          else this.returnHeight();
      }
    });
  }

  componentWillUnMount() {
    clearInterval(interval);
    this.unsubscribe1();
    this.unsubscribe();
  }

  returnHeight() {
    focusHeight = nearbyAllowed() ? nearbyHeight : restaurantHeight;
    this.spring(focusHeight);
  }

  renderFocus() {
    let focusToggled = this.state.focusToggled;
    if (nearbyAllowed()) {
      const focusHeight = focusToggled ? 60 : nearbyHeight;
      this.spring(focusHeight);
      this.changeToggle();
      Store.dispatch({ type: "update", payload: this.state.focusToggled });
    } else if (!focusToggled) {
      this.spring(restaurantHeight);
      this.changeToggle();
    } else {
      let store = Store.getState();
      let payload = {
        location: store.location,
        key: -1,
      };
      Store.dispatch({ type: "update", payload });
      this.changeToggle();
      this.spring(60);
    }
  }

  changeToggle() {
    this.setState({
      focusToggled: !this.state.focusToggled,
    });
    // HamburgerHandler.dispatch({
    //   type: "update",
    //   payload: !focusToggled,
    // });
  }

  spring(heightTo) {
    Animated.spring(this.upAnim, {
      toValue: heightTo,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }
  checkPage() {
    return this.props.currentMarker == -1;
  }

  removeShadow() {
    if (this.state.focusToggled && nearbyAllowed()) return null;
    return <View style={[s.removeShadow, u.abs, u.white, u.z1]} />;
  }

  pagenearbyAllowed() {
    const data = {
      nearbyHeight,
      restaurantHeight,
      restaurants: this.props.restaurants,
      loc: this.props.loc,
    };
    const toggled = this.state.focusToggled;
    return (
      <View style={{ zIndex: 2 }}>
        <Decide
          data={data}
          toggled={this.state.focusToggle}
          render={this.state.render}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <Animated.View
          style={[
            s.focusContainer,
            u.abs,
            {
              height,
              transform: [
                {
                  translateY: Animated.subtract(this.animHeight, this.upAnim),
                },
              ],
            },
          ]}>
          <View style={[u.fullW, u.white, u.shadow, s.bottomHeaderBody]}>
            {this.removeShadow()}
          </View>
          <View style={{ zIndex: 5, bottom: 50 }}>
            {this.pagenearbyAllowed()}
          </View>
        </Animated.View>
      </View>
    );
  }
}
