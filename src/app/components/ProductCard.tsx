//IMPORT DOS MODULOS NECESSÁRIOS
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard() {
  return (
    // CARD DO PRODUTO COM TODAS INFORMAÇÕES
    <View style={styles.card}>
      <Image
        source={require("../../../assets/images/Xburguer.png")}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>X-Burger</Text>

        <Text style={styles.description}>
          Pão brioche, carne 180g, queijo e bacon
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>R$ 29,90</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
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
    //backgroundColor: "#545415",
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
    //backgroundColor: "#952626",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  button: {
    backgroundColor: "#ff6600",
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
