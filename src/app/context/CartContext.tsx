// IMPORTAÇÕES NECESSÁRIAS DO REACT
import { createContext, useContext, useState, ReactNode } from "react";
// IMPORTAMOS NOSSOS TIPOS JÁ EXISTENTES
import { ProductType, CartItem } from "../data/products";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro do CartProvider");
  }
  return context;
}

// 1. DEFININDO A TIPAGEM DOS DADOS DO CONTEXT

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void; // ← novo
  decreaseQuantity: (productId: number) => void; // ← novo
  clearCart: () => void;
};

// 2. CRIANDO O CONTEXT   // undefined valor padrão
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
  // FUNÇÃO: aumentar quantidade de um item
  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  // FUNÇÃO: diminuir quantidade — se chegar a 0, remove o item
  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === productId,
      );

      // se a quantidade for 1 → remove o item do array
      if (existingItem && existingItem.quantity === 1) {
        return prevCart.filter((item) => item.product.id !== productId);
      }

      // se for maior que 1 → só diminui
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  };
  // O Provider "fornece" os dados(funções/state) para todos os filhos (children)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
