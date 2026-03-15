import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../../assets/images/Xburguer.png")}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>X-Burger</Text>

        <Text style={styles.description}>Pão brioche, carne 180g, queijo</Text>

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
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#444444",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 30,
    width: "100%",
  },

  image: {
    width: 120,
    height: 110,
    borderRadius: 10,
    padding: 20,
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
    width: 30,
    height: 30,
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
