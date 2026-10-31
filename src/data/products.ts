import type { ImageSourcePropType } from "react-native";

import acompanhamentos from "../../assets/images/Acompanhamentos.jpg";
import batatacompleta from "../../assets/images/batatacompleta.jpeg";
import brasaguete from "../../assets/images/brasaguete.jpeg";
import caribe from "../../assets/images/caribe.jpeg";
import cocalata from "../../assets/images/cocalata.jpeg";
import cocalatazero from "../../assets/images/cocalatazero.jpeg";
import cocalitro from "../../assets/images/cocalitro.jpeg";
import cocalitrozero from "../../assets/images/cocalitrozero.jpeg";
import comboCuiudu from "../../assets/images/combo-cuiudu.jpeg";
import comboRomeuJulieta from "../../assets/images/combo-romeuejulieta.jpeg";
import cuiudu from "../../assets/images/cuiudu.jpeg";
import cuiudutriplo from "../../assets/images/cuiudutriplo.jpeg";
import guaranalata from "../../assets/images/guaranalata.jpeg";
import guaranalatazero from "../../assets/images/guaranalatazero.jpeg";
import guaranalitro from "../../assets/images/guaranalitro.jpeg";
import nabrasaCheese from "../../assets/images/nabrasacheese.jpeg";
import nabrasaPig from "../../assets/images/nabrasapig.jpeg";
import nabrasaRings from "../../assets/images/nabrasarings.jpeg";
import primeSalad from "../../assets/images/primesalad.jpeg";
import shakeAcai from "../../assets/images/shakeacai.jpeg";
import sucoMorango from "../../assets/images/sucomorango.jpeg";
import sucoMorangoLeite from "../../assets/images/sucomorangocleite.jpeg";
import supremoCheese from "../../assets/images/supremocheese.jpeg";
import burguerpng from "../../assets/images/Xburguer.png";
export const categoryIds = ["burger", "combos", "batatas", "bebidas"] as const;

export function isCoverImageCategory(categoryId: CategoryId): boolean {
  return !["burger", "combos"].includes(categoryId);
}

export type CategoryId = (typeof categoryIds)[number];
export type CategoryVariant = "paper" | "dark" | "compact";

export type CategoryType = {
  id: CategoryId;
  label: string;
  eyebrow: string;
  variant: CategoryVariant;
};

export const categories: readonly CategoryType[] = [
  {
    id: "burger",
    label: "Burguer",
    eyebrow: "Os protagonistas",
    variant: "paper",
  },
  {
    id: "combos",
    label: "Combos",
    eyebrow: "A experiência completa",
    variant: "dark",
  },
  {
    id: "batatas",
    label: "Batatas",
    eyebrow: "Pra dividir — ou não",
    variant: "paper",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    eyebrow: "Pra acompanhar",
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
  category: CategoryId;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "Na Brasa Pig",
    description:
      "Pão de brioche, burguer de 145 gramas, cheddar em molho duplo, bacon em fatias, bacon triturado e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 145 g",
      "Cheddar em molho duplo",
      "Bacon em fatias",
      "Bacon triturado",
      "Molho Guedes",
    ],
    price: 24.99,
    image: nabrasaPig,
    category: "burger",
  },
  {
    id: 2,
    name: "Supremo Cheese",
    description:
      "Pão de brioche, burguer de 145 gramas, cream cheese empanado de 110 gramas, rúcula e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 145 g",
      "Cream cheese empanado 110 g",
      "Farinha panko",
      "Rúcula",
      "Molho Guedes",
    ],
    price: 31.99,
    image: supremoCheese,
    category: "burger",
  },
  {
    id: 3,
    name: "Na Brasa Cheese",
    description:
      "Pão de brioche, burguer de 145 gramas, cream cheese, bacon, cebola caramelizada e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 145 g",
      "Cream cheese",
      "Bacon",
      "Cebola caramelizada",
      "Molho Guedes",
    ],
    price: 22.99,
    image: nabrasaCheese,
    category: "burger",
  },
  {
    id: 4,
    name: "Cuiudu Triplo",
    description:
      "Pão de brioche, três burguers de 145 gramas, cheddar triplo, cream cheese, cebola roxa, bacon e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "3 burguers de 145 g",
      "Cheddar triplo",
      "Cream cheese",
      "Cebola roxa",
      "Bacon",
      "Molho Guedes",
    ],
    price: 37.99,
    image: cuiudutriplo,
    category: "burger",
  },
  {
    id: 5,
    name: "Prime Salad",
    description:
      "Pão artesanal, burguer de 150 gramas, queijo muçarela, bacon, cream cheese, salada e molho Guedes.",
    ingredients: [
      "Pão artesanal",
      "Burguer 150 g",
      "Queijo muçarela",
      "Bacon",
      "Cream cheese",
      "Salada",
      "Molho Guedes",
    ],
    price: 22.99,
    image: primeSalad,
    category: "burger",
  },
  {
    id: 6,
    name: "Cuiudu",
    description:
      "Pão de brioche, dois burguers de 150 gramas, cheddar triplo, bacon, cream cheese, cebola roxa e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "2 burguers de 150 g",
      "Cheddar triplo",
      "Bacon",
      "Cream cheese",
      "Cebola roxa",
      "Molho Guedes",
    ],
    price: 29.99,
    image: cuiudu,
    category: "burger",
  },
  {
    id: 7,
    name: "Na Brasa",
    description:
      "Pão de brioche, burguer de 150 gramas, bacon, cheddar, cebola caramelizada e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 150 g",
      "Bacon",
      "Cheddar",
      "Cebola caramelizada",
      "Molho Guedes",
    ],
    price: 22.99,
    image: burguerpng,
    category: "burger",
  },
  {
    id: 8,
    name: "Caribe",
    description:
      "Pão de brioche, burguer de 150 gramas, queijo muçarela, cream cheese, abacaxi caramelizado e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 150 g",
      "Queijo muçarela",
      "Cream cheese",
      "Abacaxi caramelizado",
      "Molho Guedes",
    ],
    price: 24.99,
    image: caribe,
    category: "burger",
  },
  {
    id: 9,
    name: "Brasaguete",
    description:
      "Pão estilo baguete, calabresa Josefina, molho barbecue, molho Guedes, queijo muçarela, cream cheese e bacon.",
    ingredients: [
      "Pão estilo baguete",
      "Calabresa Josefina",
      "Molho barbecue",
      "Molho Guedes",
      "Queijo muçarela",
      "Cream cheese",
      "Bacon",
    ],
    price: 18.99,
    image: brasaguete,
    category: "burger",
  },
  {
    id: 10,
    name: "Na Brasa Rings",
    description:
      "Pão de brioche, burguer de 145 gramas, cream cheese, onion rings, molho tarê e molho Guedes.",
    ingredients: [
      "Pão de brioche",
      "Burguer 145 g",
      "Cream cheese",
      "Onion rings",
      "Molho tarê",
      "Molho Guedes",
    ],
    price: 21.99,
    image: nabrasaRings,
    category: "burger",
  },
  {
    id: 11,
    name: "Combo Cuiudu",
    description: "Um Cuiudu com batata de 200 gramas, cheddar e bacon.",
    ingredients: ["1 Cuiudu", "Batata frita 200 g", "Cheddar", "Bacon"],
    price: 39.99,
    image: comboCuiudu,
    category: "combos",
  },
  {
    id: 12,
    name: "Combo Romeu e Julieta",
    description:
      "Um Na Brasa, um Na Brasa Cheese e um refrigerante de 1 litro.",
    ingredients: ["1 Na Brasa", "1 Na Brasa Cheese", "Refrigerante 1 litro"],
    price: 49.9,
    image: comboRomeuJulieta,
    category: "combos",
  },
  {
    id: 13,
    name: "Batata Simples 200 g",
    description: "Porção de batata frita simples de 200 gramas.",
    ingredients: ["Batata frita 200 g"],
    price: 16.99,
    image: acompanhamentos,
    category: "batatas",
  },
  {
    id: 14,
    name: "Batata Simples 400 g",
    description:
      "Porção de batata frita simples de 400 gramas com molho Guedes e molho vermelho.",
    ingredients: ["Batata frita 400 g", "Molho Guedes", "Molho vermelho"],
    price: 19.99,
    image: acompanhamentos,
    category: "batatas",
  },
  {
    id: 15,
    name: "Batata Completa 200 g",
    description:
      "Batata frita de 200 gramas com cheddar, bacon, molho Guedes e molho vermelho.",
    ingredients: [
      "Batata frita 200 g",
      "Cheddar",
      "Bacon",
      "Molho Guedes",
      "Molho vermelho",
    ],
    price: 19.99,
    image: batatacompleta,
    category: "batatas",
  },
  {
    id: 16,
    name: "Batata Completa 400 g",
    description:
      "Batata frita de 400 gramas com cheddar, bacon, molho Guedes e molho vermelho.",
    ingredients: [
      "Batata frita 400 g",
      "Cheddar",
      "Bacon",
      "Molho Guedes",
      "Molho vermelho",
    ],
    price: 24.99,
    image: batatacompleta,
    category: "batatas",
  },
  {
    id: 17,
    name: "Coca-Cola Lata",
    description: "Coca-Cola em lata.",
    ingredients: ["Lata"],
    price: 6,
    image: cocalata,
    category: "bebidas",
  },
  {
    id: 18,
    name: "Coca-Cola Zero Lata",
    description: "Coca-Cola Zero em lata.",
    ingredients: ["Lata", "Zero açúcar"],
    price: 6,
    image: cocalatazero,
    category: "bebidas",
  },
  {
    id: 19,
    name: "Guaraná Lata",
    description: "Guaraná em lata.",
    ingredients: ["Lata"],
    price: 6,
    image: guaranalata,
    category: "bebidas",
  },
  {
    id: 20,
    name: "Guaraná Zero Lata",
    description: "Guaraná Zero em lata.",
    ingredients: ["Lata", "Zero açúcar"],
    price: 6,
    image: guaranalatazero,
    category: "bebidas",
  },
  {
    id: 21,
    name: "Coca-Cola Zero 1 Litro",
    description: "Coca-Cola Zero de 1 litro.",
    ingredients: ["1 litro", "Zero açúcar"],
    price: 9.99,
    image: cocalitrozero,
    category: "bebidas",
  },
  {
    id: 22,
    name: "Coca-Cola 1 Litro",
    description: "Coca-Cola de 1 litro.",
    ingredients: ["1 litro"],
    price: 9.99,
    image: cocalitro,
    category: "bebidas",
  },
  {
    id: 23,
    name: "Guaraná 1 Litro",
    description: "Guaraná de 1 litro.",
    ingredients: ["1 litro"],
    price: 9.99,
    image: guaranalitro,
    category: "bebidas",
  },
  {
    id: 24,
    name: "Na Brasa Shake Açaí",
    description: "Shake de açaí da Na Brasa.",
    ingredients: ["Açaí"],
    price: 14.99,
    image: shakeAcai,
    category: "bebidas",
  },
  {
    id: 25,
    name: "Suco de Morango com Leite",
    description: "Suco de morango preparado com leite.",
    ingredients: ["Morango", "Leite"],
    price: 14.99,
    image: sucoMorangoLeite,
    category: "bebidas",
  },
  {
    id: 26,
    name: "Suco de Morango",
    description: "Suco de morango.",
    ingredients: ["Morango"],
    price: 11.99,
    image: sucoMorango,
    category: "bebidas",
  },
];
