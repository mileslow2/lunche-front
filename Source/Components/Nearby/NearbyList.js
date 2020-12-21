import React, { Component } from "react";
import { View, FlatList } from "react-native";
import u from "../../Styles/UniversalStyles";
import NearbyListItem from "./NearbyListItem";
export default class NearbyList extends Component {
  keyExtractor = item => item.id;
  renderListItem = ({ item }) => {
    if (item.name.length > 31) item.name = item.name.substring(0, 31) + " ..."; // adds ... if title is too long
    return <NearbyListItem item={item} fromSearch={this.props.fromSearch} />;
  };

  render() {
    return (
      <View style={[u.white, u.fullW]}>
        <FlatList
          ListHeaderComponent={
            <View style={[u.fullW, u.white, { height: 20 }]} />
          }
          data={this.props.restaurants}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={0}
        />
      </View>
    );
  }
}
