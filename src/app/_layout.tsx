// O Stack é o componente de navegação em pilha do Expo Router
import { Stack } from "expo-router";

// O CartProvider é o nosso "fornecedor" do estado global
import { CartProvider } from "./context/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      {" "}
      <Stack screenOptions={{ headerShown: false }} />
    </CartProvider>
  );
}
