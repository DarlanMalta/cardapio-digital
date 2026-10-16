import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { menu } from "./data/products";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Conheça nossas Deliciosas opções de lanches e acompanhamentos!
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        {menu.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
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
