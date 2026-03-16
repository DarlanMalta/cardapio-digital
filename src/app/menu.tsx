//IMPORT DOS MODULOS NECESSÁRIOS
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
// IMPORT ROUTER
import { useRouter } from "expo-router";
// IMPORT COMPONENTES
import ProductCard from "./components/ProductCard";
export default function Menu() {
  const router = useRouter();
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
      <ScrollView contentContainerStyle={styles.menuList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
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
