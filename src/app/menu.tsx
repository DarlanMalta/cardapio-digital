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

export default function Menu() {
  const router = useRouter();
  return (
    //BOTÃO DE VOLTAR, TOPO DA PÁGINA
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.returnButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Cardápio</Text>

        <ScrollView>
          <Text>X-Burger</Text>
          <Text>X-Bacon</Text>
          <Text>Batata frita</Text>
          <Text>Coca-cola</Text>
          <Text>Guaraná</Text>
        </ScrollView>
      </View>
    </View>
  );
}
//
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
  containerSearch: {
    alignItems: "center",
    marginTop: 50,
  },
  textSearch: {
    fontSize: 22,
    fontWeight: "bold",
  },

  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
