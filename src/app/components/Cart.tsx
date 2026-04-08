import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Cart() {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.textxt}>SEU CARRINHO DE COMPRAS</Text>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text>TELA INICIAL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/menu")}>
        <Text>VOLTAR AO CARDÁPIO</Text>
      </TouchableOpacity>
    </View>
  );
}
//ESTILIZAÇÃO DO CARRINHO
const styles = StyleSheet.create({
  textxt: {
    backgroundColor: "blue",
  },
});
