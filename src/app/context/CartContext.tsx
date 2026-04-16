// IMPORTAÇÕES NECESSÁRIAS DO REACT
import { createContext, useContext, useState, ReactNode } from "react";
// IMPORTAMOS NOSSOS TIPOS JÁ EXISTENTES
import { ProductType, CartItem } from "../data/products";

// 1. DEFININDO A TIPAGEM DOS DADOS DO CONTEXT

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void; // função de limpar tudo
};

// 2. CRIANDO O CONTEXT
// O undefined inicial é só o valor padrão antes do Provider assumir
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. CRIANDO O PROVIDER
// ReactNode é o tipo do TypeScript para "qualquer coisa que o React pode renderizar"
// É o tipo correto para a prop "children" — ou seja, tudo que ficar dentro do Provider
type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  // O state do carrinho agora mora aqui, no escopo (context)global
  const [cart, setCart] = useState<CartItem[]>([]);

  // FUNÇÃO: adicionar ao carrinho
  const addToCart = (product: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  // FUNÇÃO: remover um produto do carrinho pelo id
  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId),
    );
  };

  // FUNÇÃO: esvaziar o carrinho inteiro
  const clearCart = () => {
    setCart([]);
  };

  // O Provider "fornece" os dados para todos os filhos (children)
  // Qualquer tela dentro dele pode acessar cart, addToCart, removeFromCart e clearCart
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Em vez de escrever useContext(CartContext) em toda tela,
// criamos um atalho chamado useCart()
// Além disso, ele verifica se está sendo usado dentro do Provider
// e lança um erro claro caso não esteja — facilita muito o debug
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro do CartProvider");
  }
  return context;
}
