import React, { Component } from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";
import GetMenu from "../../Fetchers/GetMenu";
import u from "../../Styles/UniversalStyles";
import s from "../../Styles/MenuStyles";
const w = Dimensions.get("window").width;

const Foods = ({ item }) => {
  const imageExists = item.image != null;
  const image = imageExists ? <Image style={s.foodImage} source={{ uri: item.image }} /> : null;
  let foodTextContainerStyle = {
    width: w - w / 3,
  };
  if (imageExists) {
    foodTextContainerStyle.width = w - w / 2.3;
    foodTextContainerStyle.paddingLeft = 20;
  }
  return (
    <View style={[u.shadow, u.col, u.white, s.foodItem]}>
      <View style={u.row}>
        {image}
        <View style={foodTextContainerStyle}>
          <Text style={s.foodName}>{item.title}</Text>
          <Text style={s.foodDesc}>{item.description}</Text>
        </View>
      </View>
      <Text style={s.foodPrice}>${item.price}</Text>
    </View>
  );
};

const MenuHeader = ({ headerName }) => <Text>{headerName}</Text>;

const renderMenuCategory = ({ item }) => {
  return (
    <View style={u.centerH}>
      <FlatList ListHeaderComponent={<Text style={s.sectionHeader}>{item.sectionName}</Text>} data={item.sectionItems} renderItem={Foods} keyExtractor={(item) => item.id} />
    </View>
  );
};

const Menu = (props) => {
  let menu = GetMenu("test");

  return <FlatList data={menu} renderItem={renderMenuCategory} keyExtractor={(item) => item.id} />;
};

export default Menu;
