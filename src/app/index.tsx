import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/backgroundHome.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Menu Digital</Text>
        <Text style={styles.subtitle}>Bem-vindo ao nosso cardápio</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MENU</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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

  title: { color: "white", fontSize: 48, fontWeight: "bold" },

  subtitle: {
    color: "white",
    marginTop: 15,
    fontSize: 26,
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
