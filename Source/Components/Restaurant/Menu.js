import React, { useState, useRef } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
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
        listKey={"foo" + Math.random().toString()}
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
  [modalVisible, setModalVisible] = useState(false);
  [index, setIndex] = useState(0);
  menuList = useRef(null);

  menu = GetMenu("test");

  CategoryButton = () => (
    <TouchableOpacity
      style={[u.row, u.alignItemsCenter, s.categoriesButton, u.shadow, u.white]}
      onPress={() => {
        setModalVisible(true);
      }}>
      <Text style={s.categoryButtonText}>Categories</Text>
      <MaterialCommunityIcons
        name="menu-open"
        size={27}
        color="rgb(83, 204, 151)"
      />
    </TouchableOpacity>
  );

  ModalCategory = ({ item }) => {
    const color = item.highlighted ? "rgb(83, 204, 151)" : "#707070";
    const categoryWidth = item.highlighted
      ? s.modalHighlightWidth
      : s.modalNormalWidth;
    return (
      <TouchableOpacity
        onPress={() => {
          setIndex(item.id);
          menuList.current.scrollToIndex({
            animated: false,
            index: 1,
          });
          setModalVisible(false);
        }}>
        <View
          style={[u.white, u.shadow, s.modalCategory, u.row, categoryWidth]}>
          <Text style={[s.modalCategoryName, { color }]}>
            {item.sectionName}
          </Text>
          <Text style={[s.modalCategoryAmount]}>
            {item.sectionItems.length} items
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  CategoryModal = ({ menu }) => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={[s.screenCover, u.centerH, u.row, u.alignItemsEnd, u.abs]}
        />
        <View style={[u.white, u.shadow, u.abs, s.modalView]}>
          <View
            style={[
              u.shadow,
              s.categoryHeaderContainer,
              u.white,
              u.alignItemsCenter,
            ]}>
            <Text style={s.categoryHeader}>Food Categories</Text>
          </View>
          <FlatList
            data={menu}
            renderItem={ModalCategory}
            showsVerticalScrollIndicator={true}
            style={s.modalList}
          />
        </View>
      </Modal>
    );
  };
  return (
    <View>
      <CategoryButton />
      <CategoryModal menu={menu} />
      <FlatList
        ref={menuList}
        listKey={"foo" + Math.random().toString()}
        style={{ bottom: 15 }}
        data={menu}
        renderItem={RenderMenuCategory}
        keyExtractor={(item, index) => {
          item.id = index + "";
          return item.id;
        }}
        getItemLayout={(data, index) => {
          var offset = 0;
          for (var i = 0; i < index; i++) offset += data[i].sectionItems.length;
          return {
            length: data[index].sectionItems.length,
            offset,
            index,
          };
        }}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default Menu;
