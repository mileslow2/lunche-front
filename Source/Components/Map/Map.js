import React, { Component } from "react";
import { View, TouchableOpacity, Animated, Image } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import s from "../../Styles/MapStyles";
import u from "../../Styles/UniversalStyles";
import { FontAwesome } from "@expo/vector-icons";
import Focus from "../Focus/Focus";
import SearchBar from "../Search/SearchBar";
import { Store } from "../../Redux";
import RenderMarkers from "./RenderMarkers";
import cloneDeep from "clone-deep";
const emerald = "rgb(83, 204, 151)";
export default class Map extends Component {
  state = {
    currentMarker: -1,
    showSearch: true,
    active: true,
  };

  componentDidMount() {
    var store;
    Store.subscribe(() => {
      store = cloneDeep(Store.getState());
      this.operateMap(store);
    });
  }

  operateMap(store) {
    if (typeof store == "object") {
      //if store is updating marker
      const showSearch = store.key == -1;
      const newLat = showSearch ? 0.0043 : 0.0057;
      var newLoc = store.location;
      newLoc.latitude -= newLat - 0.0018;
      // store.location.latitude -= newLat;
      this.moveMap(newLoc);
      this.setState({
        currentMarker: store.key,
        showSearch,
      });
      this.forceUpdate(); // makes sure all the markers get updated
    } else {
      // if the store isn't updating the marker, it's trying to remove the search bar
      this.setState({
        showSearch: store,
      });
    }
  }

  unfocus = () => {
    this.setState({
      showSearch: true,
      currentMarker: -1,
    });
  };

  moveMap(loc) {
    loc.latitudeDelta = 0.0154;
    loc.longitudeDelta = 0.0069;
    this.map.animateToRegion(loc, 400);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.changeRegionState(props.region);
  }

  async centerMap() {
    let loc = {
      latitude: 33.990165,
      longitude: -118.464606,
    };
    this.moveMap(loc);
  }

  renderCenterButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.centerMap();
        }}
        style={[s.button, u.abs, u.shadow, u.white]}>
        <Image
          style={[u.centerH, u.centerV, s.icon]}
          source={require("../../../assets/location-arrow-solid.png")}
        />
        {/* <FontAwesome style={[u.centerH, u.centerV, s.icon]} name={"location-arrow"} size={40} color={emerald} /> */}
      </TouchableOpacity>
    );
  };

  changeRegionState(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View>
        <MapView
          ref={(map) => {
            this.map = map;
          }}
          style={s.container}
          initialRegion={this.props.region}
          showsUserLocation={false}
          showsMyLocationButton={false}
          rotat
          eEnabled={false}
          pitchEnabled={false}
          showsCompass={false}
          zoomEnabled={false}>
          {RenderMarkers(
            this.props.markers,
            this.state.currentMarker,
            this.state.region
          )}
        </MapView>
        <SearchBar
          showSearch={this.state.showSearch}
          restaurants={this.props.markers}
        />
        {this.renderCenterButton()}
        <Focus
          restaurants={this.props.markers}
          loc={{
            lat: this.props.region.latitude,
            lon: this.props.region.longitude,
          }}
          currentMarker={this.state.currentMarker}
        />
      </View>
    );
  }
}
