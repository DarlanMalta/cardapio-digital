import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Cart() {
  const router = useRouter();
  return (
    <View style={styles.Container}>
      <View style={styles.stylesHeader}>
        <Text style={styles.textHeader}>SEU CARRINHO DE COMPRAS</Text>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.ButtonRoute}>TELA INICIAL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/menu")}>
          <Text style={styles.ButtonRoute}>VOLTAR AO CARDÁPIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//ESTILIZAÇÃO DO CARRINHO
const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "green",
    //  justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 25,
    color: "#444444",
    textAlign: "center",
  },
  ButtonRoute: {
    fontSize: 14,
    color: "white",
    backgroundColor: "#ff6600",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    textAlign: "center",
    margin: 10,
  },

  stylesHeader: {
    //backgroundColor: "blue",

    justifyContent: "center",
  },
});
