import Xburguer from "../../../assets/images/Xburguer.png";
export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
};

export const menu: ProductType[] = [
  {
    id: 1,
    name: "X-Burger",
    description: "Pão brioche, carne 180g, queijo e molho da casa",
    price: 29.9,
    image: Xburguer,
  },
  {
    id: 2,
    name: "X-Bacon",
    description: "Pão brioche, carne 180g, bacon crocante",
    price: 34.9,
    image: Xburguer,
  },
  {
    id: 3,
    name: "Batata Frita",
    description: "Porção de batata frita crocante",
    price: 15.9,
    image: Xburguer,
  },
  {
    id: 4,
    name: "Calafrango",
    description: "Pão brioche, frango 180g, bacon crocante",
    price: 24.9,
    image: Xburguer,
  },
  {
    id: 5,
    name: "Nuggets",
    description: "Porção de nuggets frita crocante",
    price: 25.9,
    image: Xburguer,
  },
  {
    id: 6,
    name: "X-tudo",
    description: "Pão brioche, frango 180g, bacon crocante, calabresa, salada",
    price: 24.9,
    image: Xburguer,
  },
  {
    id: 7,
    name: "X-calabresa",
    description: "Pão brioche, calabresa, bacon crocante, queijo",
    price: 24.9,
    image: Xburguer,
  },
];

export type CartItem = {
  product: ProductType;
  quantity: number;
};
