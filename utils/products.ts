import { Asset } from "expo-asset";
export interface Product {
  id: number
  image: Asset
  offer: string
  name: string
  price: string
  originalPrice: string
  rating: string
}

const productsList: Product[] = [
  {
    id: 1,
    image:Asset.fromModule(require("../assets/images/chair1.png")),
    offer: "45% OFF",
    name: "EKERO",
    price: "$230.00",
    originalPrice: "$512.28",
    rating: "4.9 (300)",
  },
  {
    id: 2,
    image:Asset.fromModule(require("../assets/images/chair2.png")),
    offer: "30% OFF",
    name: "LUND",
    price: "$180.00",
    originalPrice: "$257.00",
    rating: "4.7 (150)",
  },
  {
    id: 3,
    image:Asset.fromModule(require("../assets/images/chair3.png")),
    offer: "50% OFF",
    name: "HOLM",
    price: "$120.00",
    originalPrice: "$240.00",
    rating: "4.8 (200)",
  },
  {
    id: 4,
    image:Asset.fromModule(require("../assets/images/chair4.png")),
    offer: "20% OFF",
    name: "SÖDER",
    price: "$250.00",
    originalPrice: "$312.50",
    rating: "4.6 (100)",
  },
  {
    id: 5,
    image:Asset.fromModule(require("../assets/images/chair5.png")),
    offer: "10% OFF",
    name: "KARL",
    price: "$200.00",
    originalPrice: "$222.22",
    rating: "4.5 (50)",
  },
];

export default productsList