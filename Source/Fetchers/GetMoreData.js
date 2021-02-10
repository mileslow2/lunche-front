export default async function GetMoreData(data) {
  // var returnValue;
  // const googleMapRequest =
  //   "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + data.reference + "&fields=opening_hours,website,formatted_phone_number&key=AIzaSyCqcvLyqdoG-kulmhEGFWS6ze3sSt74_vc";
  // try {
  //   await fetch(googleMapRequest)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       delete res.result.opening_hours.periods;
  //       returnValue = Object.assign(data, res.result);
  //     });
  // } catch (error) {
  //   console.error(error);
  // }

  var data2 = {
    formatted_phone_number: "(424) 278-8254",
    opening_hours: {
      open_now: "true",
      weekday_text: [
        "Monday: 11:00 AM – 9:00 PM",
        "Tuesday: 11:00 AM – 9:00 PM",
        "Wednesday: 11:00 AM – 9:00 PM",
        "Thursday: 11:00 AM – 9:00 PM",
        "Friday: 11:00 AM – 10:00 PM",
        "Saturday: 11:00 AM – 10:00 PM",
        "Sunday: 11:00 AM – 9:00 PM",
      ],
    },
    website: null,
    dist: "1 min drive",
  };
  if (data.key === 2) {
    data2.dist = "2 min drive";
  }
  returnValue = Object.assign(data, data2);

  return returnValue;
}
