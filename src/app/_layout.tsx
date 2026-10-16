// O Stack é o componente de navegação em pilha do Expo Router
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
