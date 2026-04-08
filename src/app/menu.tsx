// IMPORT FUNCIONALIDADES
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { menu, CartItem, ProductType } from "./data/products";
import ProductCard from "./components/ProductCard";
export default function MenuView() {
  //STATE CARRINHO, cart RECEBERÁ UM ARRAY DO TIPO CartItem[] QUE COMEÇA VAZIO useState<TIPO>(valorInicial)
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: ProductType) => {
    setCart((prevCart) => {
      // verifica se o produto já existe no carrinho
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        // se já existe → aumenta a quantidade
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      console.log("Produto adicionado:", cart);
      // se não existe → adiciona novo item
      return [...prevCart, { product, quantity: 1 }];
    });
  };
  return (
    //BOTÃO DE VOLTAR, TOPO DA PÁGINA
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.returnButton}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Conheça nossas Deliciosas opções de lanches e acompanhamentos!
        </Text>
      </View>
      {/* ÁREA DE SCROLLVIEW, CONTAINER PAI DO MENU */}
      {/* A PROP QUE O PRODUCTCARD RECEBE É UM item (PRODUTO DO ARRAY MENU), DESSA FORMA ELE TRABALHA COM OS DADOS */}
      <ScrollView contentContainerStyle={styles.menuList}>
        {menu.map((item) => (
          <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
        ))}
      </ScrollView>
      {/* // ROTA DO CART */}
      <TouchableOpacity onPress={() => router.push("/components/Cart")}>
        <Text style={styles.cartButton}>Carrinho ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
}
//ESTILIZAÇÃO DO MENU
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
  },
  returnButton: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#ff6600",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cartButton: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#ff6600",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    //alignItems: "center",
    textAlign: "center",
  },
  menuList: {
    width: "100%",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 25,
    color: "#444444",
    textAlign: "center",
  },
});
