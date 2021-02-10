const pizza = [
  {
    sectionName: "Classic Pizzas",
    highlighted: true,
    sectionItems: [
      {
        title: "Cheese Pizza",
        description:
          "You cant go wrong with classic cheese, especially our cheese",
        image: null,
        price: "15",
      },
      {
        title: "Pepperoni Pizza",
        description: "America’s favorite pizza topping, we do it the best",
        image:
          "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png",
        price: "15",
      },
    ],
  },
  {
    sectionName: "Specialty Pizzas",
    sectionItems: [
      {
        title: "Cheese Pizza",
        description:
          "You cant go wrong with classic cheese, especially our cheese",
        image: null,
        price: "15",
      },
      {
        title: "Pepperoni Pizza",
        description: "America’s favorite pizza topping, we do it the best",
        image:
          "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png",
        price: "15",
      },
    ],
  },
];

export default function GetMenu(placeName) {
  return pizza;
}
