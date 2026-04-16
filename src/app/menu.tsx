// IMPORT FUNCIONALIDADES
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { menu } from "./data/products";
import { useCart } from "./context/CartContext";
import ProductCard from "./components/ProductCard";
export default function MenuView() {
  //STATE CARRINHO, cart RECEBERÁ UM ARRAY DO TIPO CartItem[] QUE COMEÇA VAZIO useState<TIPO>(valorInicial)
  const router = useRouter();

  const { cart, addToCart } = useCart();

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
      <TouchableOpacity onPress={() => router.push("/Cart")}>
        <Text style={styles.cartButton}>Carrinho ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
}
//ESTILIZAÇÃO DO MENU
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: "center",
    margin: 10,
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
