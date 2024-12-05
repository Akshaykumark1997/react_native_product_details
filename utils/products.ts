export interface Product {
  id: number
  image: string
  offer: string
  name: string
  price: string
  originalPrice: string
  rating: string
}

const productsList: Product[] = [
  {
    id: 1,
    image:
      "https://www.ikea.com/in/en/images/products/adde-chair-white__0728280_pe736170_s5.jpg?f=xl",
    offer: "45% OFF",
    name: "EKERO",
    price: "$230.00",
    originalPrice: "$512.28",
    rating: "4.9 (300)",
  },
  {
    id: 2,
    image:
      "https://www.ikea.com/in/en/images/products/renberget-swivel-chair-bomstad-black__1020135_pe831794_s5.jpg?f=xl",
    offer: "30% OFF",
    name: "LUND",
    price: "$180.00",
    originalPrice: "$257.00",
    rating: "4.7 (150)",
  },
  {
    id: 3,
    image:
      "https://www.ikea.com/in/en/images/products/poaeng-armchair-brown-knisa-light-beige__0571543_pe666957_s5.jpg?f=xl",
    offer: "50% OFF",
    name: "HOLM",
    price: "$120.00",
    originalPrice: "$240.00",
    rating: "4.8 (200)",
  },
  {
    id: 4,
    image:
      "https://www.ikea.com/in/en/images/products/smaellen-swivel-chair-black__1096271_pe864278_s5.jpg?f=xl",
    offer: "20% OFF",
    name: "SÖDER",
    price: "$250.00",
    originalPrice: "$312.50",
    rating: "4.6 (100)",
  },
  {
    id: 5,
    image:
      "https://www.ikea.com/in/en/images/products/flintan-office-chair-with-armrests-black__1007241_pe825960_s5.jpg?f=xl",
    offer: "10% OFF",
    name: "KARL",
    price: "$200.00",
    originalPrice: "$222.22",
    rating: "4.5 (50)",
  },
];

export default productsList