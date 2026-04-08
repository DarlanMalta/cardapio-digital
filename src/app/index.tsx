//IMPORT DOS MODULOS NECESSÁRIOS
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// IMPORT ROUTER
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    //ENVOLVENDO O COMPONENTE COM O BACKGROUND IMAGE - CONTAINER CENTRAL
    <ImageBackground
      source={require("../../assets/images/backgroundHome.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Menu Digital</Text>
        <Text style={styles.subtitle}>Bem-vindo ao nosso cardápio</Text>
        {/* BOTÃO DE ROTA PARA MENU */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/menu")}
        >
          <Text style={styles.buttonText}>CARDÁPIO</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

//ESTILIZAÇÃO DA HOME
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#ff5A00",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#ff6600",
    marginTop: 15,
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#0e0e0e",
    fontWeight: "bold",
    fontSize: 16,
  },
});
