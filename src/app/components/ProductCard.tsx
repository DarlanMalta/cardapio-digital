//IMPORT DOS MODULOS NECESSÁRIOS
import { Image, StyleSheet, Text, View } from "react-native";
import { ProductType } from "../data/products";
//TIPANDO AS PROPS
type Props = {
  product: ProductType;
};
export default function ProductCard({ product }: Props) {
  return (
    // CARD DO PRODUTO COM TODAS INFORMAÇÕES
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}
//ESTILIZAÇÃO DO PRODUCTCARD
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#444444",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    width: "100%",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  info: {
    padding: 20,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  description: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
