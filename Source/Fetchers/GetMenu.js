const pizza = [
  {
    sectionName: "Classic Pizzas",
    sectionItems: [
      {
        title: "Cheese Pizza",
        description: "You cant go wrong with classic cheese, especially our cheese",
        image: null,
        price: "15",
      },
      {
        title: "Pepperoni Pizza",
        description: "America’s favorite pizza topping, we do it the best",
        image: null,
        price: "15",
      },
    ],
  },
];

export default function GetMenu(placeName) {
  return pizza;
}
