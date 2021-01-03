import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import GetMenu from "../../Fetchers/GetMenu";
import u from "../../Styles/UniversalStyles";
import s from "../../Styles/MenuStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const w = Dimensions.get("window").width;

const Foods = ({ item }) => {
  const imageExists = item.image != null;
  const image = imageExists ? (
    <Image style={s.foodImage} source={{ uri: item.image }} />
  ) : null;
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

const RenderMenuCategory = ({ item }) => {
  return (
    <View style={u.centerH}>
      <FlatList
        listKey={"parent"}
        ListHeaderComponent={
          <Text style={s.sectionHeader}>{item.sectionName}</Text>
        }
        data={item.sectionItems}
        renderItem={Foods}
        keyExtractor={(item, index) => {
          item.id = index + "";
          return item.id;
        }}
      />
    </View>
  );
};

const Menu = ({ item }) => {
  const [showCategorychooser, setCategorychooser] = useState(false);
  let menu = GetMenu("test");

  const CategoryChooser = () => {
    if (showCategorychooser) return null;
    return <View style={s.categoryChooserBackground}></View>;
  };

  const CategoryButton = () => {
    return (
      <TouchableOpacity
        style={[
          u.row,
          u.alignItemsCenter,
          s.categoriesButton,
          u.shadow,
          u.white,
        ]}
        onPress={() => setCategorychooser(false)}>
        <Text style={s.categoryButtonText}>Categories</Text>
        <MaterialCommunityIcons
          name="menu-open"
          size={27}
          color="rgb(83, 204, 151)"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Modal transparent={false} visible={showCategorychooser}>
        <CategoryChooser />
      </Modal>
      <CategoryButton />
      <FlatList
        listKey={"child"}
        style={{ bottom: 15 }}
        data={menu}
        renderItem={RenderMenuCategory}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default Menu;
