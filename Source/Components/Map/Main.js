import React from "react";
import { View, SafeAreaView } from "react-native";
import Map from "./Map";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import GetPlaces from "../../Fetchers/GetPlaces";

export default class Main extends React.Component {
  state = {
    region: null,
    markers: [],
  };
  async componentWillMount() {
    await Permissions.askAsync(Permissions.LOCATION);
    region = {
      accuracy: 5,
      altitude: 0,
      altitudeAccuracy: -1,
      heading: -1,
      latitude: 33.9898,
      longitude: -118.4651,
      latitudeDelta: 0.0069,
      longitudeDelta: 0.0069,
    };
    this.setRegion(region);
    this.setMarkers(region);
  }

  setRegion() {
    region.latitudeDelta = 0.0094;
    region.longitudeDelta = 0.0039;
    this.setState({
      region,
    });
  }
  setMarkers = async (loc) => {
    var markers = [
      {
        description: "Best street sushi you will find that's not in Tokyo",
        business_status: "OPERATIONAL",
        formatted_address: "395 Santa Monica Pl Suite 172, Santa Monica, CA 90401, United States",
        geometry: {
          location: {
            lat: 33.990323,
            lng: -118.463994,
          },
        },
        name: "Ichiraku Sushi",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            photo_reference: "https://i.pinimg.com/originals/9f/30/79/9f30793d6306bbba1aceaefdb0f1752c.jpg",
          },
        ],
        place_id: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
        rating: 5,
        reference: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
      },
      {
        description: "Burritos, Tacos, Tostadas, Quesadillas, and more!",
        business_status: "OPERATIONAL",
        formatted_address: "395 Santa Monica Pl Suite 172, Santa Monica, CA 90401, United States",
        geometry: {
          location: {
            lat: 33.991413,
            lng: -118.465693,
          },
        },
        name: "El Cerdo Grande",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            photo_reference: "https://www.cookingclassy.com/wp-content/uploads/2017/03/grilled-chicken-avocado-street-tacos-8.jpg",
          },
        ],
        place_id: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
        rating: 4.5,
        reference: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
      },
      {
        description: "Authentic pizza from an authentic pizza oven ... In a truck",
        business_status: "OPERATIONAL",
        formatted_address: "395 Santa Monica Pl Suite 172, Santa Monica, CA 90401, United States",
        geometry: {
          location: {
            lat: 33.987581,
            lng: -118.465729,
          },
        },
        name: "Fratelli di Teglia",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            photo_reference: "https://thecounter.org/wp-content/uploads/2019/01/pizza-prince-street-lawsuit-january-2019-1.jpeg",
          },
        ],
        place_id: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
        rating: 4.5,
        reference: "ChIJMRfJu9GkwoARMwkTtwb5dfk",
      },
    ];

    for (var i = 0; i < markers.length; i++) markers[i].key = i; // they need keys
    this.setState({ markers });
  };

  render() {
    if (this.state.region == null) {
      return <View style={{ backgroundColor: "white", flex: 1 }} />;
    }
    return (
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <Map region={this.state.region} markers={this.state.markers} />
      </SafeAreaView>
    );
  }
}
