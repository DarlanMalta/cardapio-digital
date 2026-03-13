import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image source={{ uri: "" }} style={styles.image} />

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
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 10,
    marginLeft: 150,
    backgroundColor: "#c11212",
    borderRadius: 10,
    width: 450,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#0843f4",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#ff3b30",
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
