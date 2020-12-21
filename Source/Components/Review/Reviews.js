import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";
import ReviewList from "./ReviewList";
export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.data.key,
      reviews: this.decideReviews(props.data.key),
    };
  }

  decideReviews(key) {
    var reviews = [
      {
        name: "Miles Low",
        rating: 5,
        review: "The sushi here is definetly worth dying for! I recommend the California rolls",
      },
      {
        name: "Mary Welsh",
        rating: 5,
        review: "The staff here are super friendly and the food tastes amazing. All the fish is super high quality.",
      },
    ];
    if (key === 1) {
      reviews = [
        {
          name: "Mildred Blau",
          rating: 5,
          review: "In a city full of Mexican food, this is the place to go. They do all the little things right. They have excellent service. ",
        },
        {
          name: "Seb Allan",
          rating: 4,
          review: "The food was really good but took it way longer than I expected.",
        },
      ];
    } else if (key === 2) {
      reviews = [
        {
          name: "Cory Pratt",
          rating: 4,
          review: "It's a little pricy for pizza, but I am definetly coming again",
        },
        {
          name: "Luke Longarzo",
          rating: 5,
          review: "It tastes just like back home in NY. Love it!",
        },
      ];
    }
    return reviews;
  }

  render() {
    return (
      <View>
        <View style={[u.row]}>
          <Text style={s.header}>Reviews</Text>
          {this.renderButton}
        </View>
        <ReviewList data={this.state.reviews} />
      </View>
    );
  }
}
