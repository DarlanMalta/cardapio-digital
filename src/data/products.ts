import type { ImageSourcePropType } from "react-native";

import sideImage from "../../assets/images/Acompanhamentos.jpg";
import drinkImage from "../../assets/images/Bebidas.png";
import burgerImage from "../../assets/images/Xburguer.png";

export const categoryIds = [
  "burger",
  "combos",
  "batatas",
  "bebidas",
] as const;

export type CategoryId = (typeof categoryIds)[number];
export type CategoryVariant = "paper" | "dark" | "compact";

export type CategoryType = {
  id: CategoryId;
  label: string;
  eyebrow: string;
  description: string;
  variant: CategoryVariant;
};

export const categories: readonly CategoryType[] = [
  {
    id: "burger",
    label: "Burger",
    eyebrow: "Os protagonistas",
    description: "Receitas feitas para chegar à mesa com presença.",
    variant: "paper",
  },
  {
    id: "combos",
    label: "Combos",
    eyebrow: "A experiência completa",
    description: "Combinações da casa para aproveitar do começo ao fim.",
    variant: "dark",
  },
  {
    id: "batatas",
    label: "Batatas",
    eyebrow: "Pra dividir — ou não",
    description: "Os extras que completam o rolê.",
    variant: "paper",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    eyebrow: "Pra acompanhar",
    description: "Geladas e no ponto para fechar o pedido.",
    variant: "compact",
  },
];

export type ProductType = {
  id: number;
  name: string;
  description: string;
  ingredients: readonly string[];
  price: number;
  image: ImageSourcePropType;
  imageAlt: string;
  category: CategoryId;
  tag?: string;
  featured?: boolean;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "Na Brasa Pig",
    description:
      "Pão de brioche, burger de 145 g, cheddar em molho duplo, bacon em fatias, bacon triturado e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "Burger 145 g",
      "Cheddar em molho",
      "Bacon",
      "Molho da casa",
    ],
    price: 24.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Na Brasa Pig",
    category: "burger",
  },
  {
    id: 2,
    name: "Supremo Cheese",
    description:
      "Pão de brioche, burger de 145 g, cream cheese empanado de 110 g, rúcula e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "Burger 145 g",
      "Cream cheese 110 g",
      "Farinha panko",
      "Rúcula",
      "Molho da casa",
    ],
    price: 31.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Supremo Cheese",
    category: "burger",
  },
  {
    id: 3,
    name: "Na Brasa Cheese",
    description:
      "Pão de brioche, blend de 145 g, cream cheese, bacon, cebola caramelizada e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "Blend 145 g",
      "Cream cheese",
      "Bacon",
      "Cebola caramelizada",
      "Molho da casa",
    ],
    price: 22.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Na Brasa Cheese",
    category: "burger",
  },
  {
    id: 4,
    name: "Cuiudu Triplo",
    description:
      "Pão de brioche, três hambúrgueres de 145 g, cheddar triplo, cream cheese, cebola roxa, bacon e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "3 hambúrgueres de 145 g",
      "Cheddar triplo",
      "Cream cheese",
      "Cebola roxa",
      "Bacon",
      "Molho da casa",
    ],
    price: 37.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Cuiudu Triplo",
    category: "burger",
  },
  {
    id: 5,
    name: "Prime Salad",
    description:
      "Pão artesanal, blend de 150 g, queijo muçarela, bacon, cream cheese, salada e molho Guedes.",
    ingredients: [
      "Pão artesanal",
      "Blend 150 g",
      "Queijo muçarela",
      "Bacon",
      "Cream cheese",
      "Salada",
      "Molho Guedes",
    ],
    price: 22.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Prime Salad",
    category: "burger",
  },
  {
    id: 6,
    name: "Cuiudu",
    description:
      "Pão de brioche, dois blends de 150 g, cheddar triplo, bacon, cream cheese, cebola roxa e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "2 blends de 150 g",
      "Cheddar triplo",
      "Bacon",
      "Cream cheese",
      "Cebola roxa",
      "Molho Guedes",
    ],
    price: 29.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Cuiudu",
    category: "burger",
  },
  {
    id: 7,
    name: "Na Brasa",
    description:
      "Pão de brioche, blend de 150 g, bacon, cheddar, cebola caramelizada e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Blend 150 g",
      "Bacon",
      "Cheddar",
      "Cebola caramelizada",
      "Molho Guedes",
    ],
    price: 22.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Na Brasa",
    category: "burger",
  },
  {
    id: 8,
    name: "Caribe",
    description:
      "Pão de brioche, blend de 150 g, queijo muçarela, cream cheese, abacaxi caramelizado e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "Blend 150 g",
      "Queijo muçarela",
      "Cream cheese",
      "Abacaxi caramelizado",
      "Molho da casa",
    ],
    price: 24.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Caribe",
    category: "burger",
  },
  {
    id: 9,
    name: "Brasaguete",
    description:
      "Pão estilo baguete, calabresa Josefina, molho barbecue, molho da casa, queijo muçarela, cream cheese e bacon.",
    ingredients: [
      "Pão baguete",
      "Calabresa Josefina",
      "Molho barbecue",
      "Molho da casa",
      "Queijo muçarela",
      "Cream cheese",
      "Bacon",
    ],
    price: 18.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Brasaguete",
    category: "burger",
  },
  {
    id: 10,
    name: "Na Brasa Rings",
    description:
      "Pão de brioche, burger de 145 g, cream cheese, onion rings, molho tarê e molho da casa.",
    ingredients: [
      "Pão de brioche",
      "Burger 145 g",
      "Cream cheese",
      "Onion rings",
      "Molho tarê",
      "Molho da casa",
    ],
    price: 21.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Na Brasa Rings",
    category: "burger",
  },
  {
    id: 11,
    name: "Combo Cuiudu",
    description: "Um Cuiudu com batata de 200 g, cheddar e bacon.",
    ingredients: ["1 Cuiudu", "Batata 200 g", "Cheddar", "Bacon"],
    price: 39.99,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Combo Cuiudu",
    category: "combos",
  },
  {
    id: 12,
    name: "Combo Romeu e Julieta",
    description:
      "Um Na Brasa, um Na Brasa Cheese e um refrigerante de 1 litro.",
    ingredients: [
      "1 Na Brasa",
      "1 Na Brasa Cheese",
      "Refrigerante 1 litro",
    ],
    price: 49.9,
    image: burgerImage,
    imageAlt: "Imagem demonstrativa do Combo Romeu e Julieta",
    category: "combos",
  },
  {
    id: 13,
    name: "Batata Simples 200 g",
    description: "Porção de batata frita simples de 200 g.",
    ingredients: ["Batata frita 200 g"],
    price: 16.99,
    image: sideImage,
    imageAlt: "Imagem demonstrativa da Batata Simples 200 g",
    category: "batatas",
  },
  {
    id: 14,
    name: "Batata Simples 400 g",
    description:
      "Porção de batata frita simples de 400 g com molho Guedes e molho vermelho.",
    ingredients: [
      "Batata frita 400 g",
      "Molho Guedes",
      "Molho vermelho",
    ],
    price: 19.99,
    image: sideImage,
    imageAlt: "Imagem demonstrativa da Batata Simples 400 g",
    category: "batatas",
  },
  {
    id: 15,
    name: "Batata Completa 200 g",
    description:
      "Batata frita de 200 g com cheddar, bacon, molho Guedes e molho vermelho.",
    ingredients: [
      "Batata frita 200 g",
      "Cheddar",
      "Bacon",
      "Molho Guedes",
      "Molho vermelho",
    ],
    price: 19.99,
    image: sideImage,
    imageAlt: "Imagem demonstrativa da Batata Completa 200 g",
    category: "batatas",
  },
  {
    id: 16,
    name: "Batata Completa 400 g",
    description:
      "Batata frita de 400 g com cheddar, bacon, molho Guedes e molho vermelho.",
    ingredients: [
      "Batata frita 400 g",
      "Cheddar",
      "Bacon",
      "Molho Guedes",
      "Molho vermelho",
    ],
    price: 24.99,
    image: sideImage,
    imageAlt: "Imagem demonstrativa da Batata Completa 400 g",
    category: "batatas",
  },
  {
    id: 17,
    name: "Coca-Cola Lata",
    description: "Coca-Cola em lata.",
    ingredients: ["Lata"],
    price: 6,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida em lata",
    category: "bebidas",
  },
  {
    id: 18,
    name: "Coca-Cola Zero Lata",
    description: "Coca-Cola Zero em lata.",
    ingredients: ["Lata", "Zero açúcar"],
    price: 6,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida em lata",
    category: "bebidas",
  },
  {
    id: 19,
    name: "Guaraná Lata",
    description: "Guaraná em lata.",
    ingredients: ["Lata"],
    price: 6,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida em lata",
    category: "bebidas",
  },
  {
    id: 20,
    name: "Guaraná Zero Lata",
    description: "Guaraná Zero em lata.",
    ingredients: ["Lata", "Zero açúcar"],
    price: 6,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida em lata",
    category: "bebidas",
  },
  {
    id: 21,
    name: "Coca-Cola Zero 1 Litro",
    description: "Coca-Cola Zero de 1 litro.",
    ingredients: ["1 litro", "Zero açúcar"],
    price: 9.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida de 1 litro",
    category: "bebidas",
  },
  {
    id: 22,
    name: "Coca-Cola 1 Litro",
    description: "Coca-Cola de 1 litro.",
    ingredients: ["1 litro"],
    price: 9.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida de 1 litro",
    category: "bebidas",
  },
  {
    id: 23,
    name: "Guaraná 1 Litro",
    description: "Guaraná de 1 litro.",
    ingredients: ["1 litro"],
    price: 9.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de bebida de 1 litro",
    category: "bebidas",
  },
  {
    id: 24,
    name: "Na Brasa Shake Açaí",
    description: "Shake de açaí da Na Brasa.",
    ingredients: ["Açaí"],
    price: 14.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de shake de açaí",
    category: "bebidas",
  },
  {
    id: 25,
    name: "Suco de Morango com Leite",
    description: "Suco de morango preparado com leite.",
    ingredients: ["Morango", "Leite"],
    price: 14.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de suco de morango com leite",
    category: "bebidas",
  },
  {
    id: 26,
    name: "Suco de Morango",
    description: "Suco de morango.",
    ingredients: ["Morango"],
    price: 11.99,
    image: drinkImage,
    imageAlt: "Imagem demonstrativa de suco de morango",
    category: "bebidas",
  },
];
