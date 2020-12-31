import React, { Component } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import GetMenu from "../../Fetchers/GetMenu";
import u from "../../Styles/UniversalStyles";
import s from "../../Styles/MenuStyles";

const Foods = ({ item }) => {
  return (
    <View style={[u.shadow, u.col, u.white, s.foodItem]}>
      <Text style={s.foodName}>{item.title}</Text>
      <Text style={s.foodDesc}>{item.description}</Text>
      <Text style={s.foodPrice}>${item.price}</Text>
    </View>
  );
};

const MenuHeader = ({ headerName }) => <Text>{headerName}</Text>;

const renderMenuCategory = ({ item }) => {
  return (
    <SafeAreaView style={u.centerH}>
      <FlatList ListHeaderComponent={<Text style={s.sectionHeader}>{item.sectionName}</Text>} data={item.sectionItems} renderItem={Foods} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const Menu = (props) => {
  let menu = GetMenu("test");

  return (
    <SafeAreaView>
      <FlatList data={menu} renderItem={renderMenuCategory} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default Menu;
