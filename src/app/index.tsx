import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { categories, products } from "./data/products";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Conheça nossas Deliciosas opções de lanches e acompanhamentos!
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.menuList}>
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id,
          );

          return (
            <View key={category.id} style={styles.categorySection}>
              <Text style={styles.categoryTitle}>{category.label}</Text>

              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </View>
          );
        })}
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
    paddingBottom: 24,
  },

  categorySection: {
    width: "100%",
    marginBottom: 24,
  },

  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#444444",
    marginBottom: 12,
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
