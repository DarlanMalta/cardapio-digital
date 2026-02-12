import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function Menu() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Conheçam nossas opções de lanche abaixo ... bla bla bla
      </Text>
      <Text style={styles.text}>Tela do Cardápio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
