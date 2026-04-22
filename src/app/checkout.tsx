import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useCart } from "./context/CartContext";

// NÚMERO DO WHATSAPP QUE RECEBERÁ OS PEDIDOS
const WHATSAPP_NUMBER = "5577992075968";

export default function Checkout() {
  const router = useRouter();

  // PEGANDO O CARRINHO DO CONTEXT
  // importo o cart para montar a mensagem e clearCart para limpar após enviar
  const { cart, clearCart } = useCart();

  // ESTADOS DOS CAMPOS DO FORMULÁRIO
  // cada campo tem seu próprio state — quando o usuário digita, o state atualiza
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // CALCULANDO O TOTAL
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0,
  );

  // FUNÇÃO: monto a mensagem apartir do array do carrinho
  const buildMessage = () => {
    // join("\n") transforma o array de linhas em um texto com quebras de linha
    const itemLines = cart
      .map(
        (item) =>
          `• ${item.product.name} × ${item.quantity} — R$ ${(item.product.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");

    // template da mensagem completa
    const message =
      `*NOVO PEDIDO*\n\n` +
      `Cliente: ${name}\n` +
      `Endereço: ${address}\n\n` +
      `*Itens:*\n${itemLines}\n\n` +
      `*Total: R$ ${total.toFixed(2)}*`;

    return message;
  };

  // FUNÇÃO: valida as informações e envia por whatsapp
  const handleSend = async () => {
    // VALIDAÇÃO — garante que os campos estão preenchidos antes de enviar
    // trim() remove espaços em branco — evita que o usuário envie só espaços
    if (!name.trim() || !address.trim()) {
      Alert.alert(
        "Atenção",
        "Preencha seu nome e endereço antes de continuar.",
      );
      return; // interrompe a função se algum campo estiver vazio
    }

    // montamos a mensagem
    const message = buildMessage();

    // encodeURIComponent converte caracteres especiais para o formato de URL
    // isso é necessário porque a mensagem vai dentro de uma URL
    const encodedMessage = encodeURIComponent(message);

    // URL final do WhatsApp
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // verificamos se o dispositivo consegue abrir a URL(enxerga o whatsapp)
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url); // abre o WhatsApp com a mensagem pronta
      clearCart();
      router.push("/");
    } else {
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Confirmar Pedido</Text>
        <TouchableOpacity onPress={() => router.push("/Cart")}>
          <Text style={styles.backButton}>← Voltar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      {/* FORMULÁRIO */}
      <View style={styles.form}>
        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName} //atualiza o state
        />

        <Text style={styles.label}>Endereço de entrega</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress} //atualiza o state
          multiline // permite múltiplas linhas para endereços longos
        />
      </View>

      {/* RESUMO DO PEDIDO */}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Resumo do pedido</Text>

        {cart.map((item) => (
          <View key={item.product.id} style={styles.summaryItem}>
            <Text style={styles.summaryItemName}>
              {item.product.name} × {item.quantity}
            </Text>
            <Text style={styles.summaryItemPrice}>
              R$ {(item.product.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}

        {/* LINHA DIVISÓRIA */}
        <View style={styles.divider} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
        </View>
      </View>

      {/* BOTÃO DE ENVIO */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Enviar pedido no WhatsApp 📲</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  backButton: {
    marginTop: 10,
    fontSize: 14,
    color: "#ff6600",
  },
  form: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: "#333",
    backgroundColor: "#fafafa",
  },
  summary: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryItemName: {
    fontSize: 14,
    color: "#555",
  },
  summaryItemPrice: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff6600",
  },
  sendButton: {
    backgroundColor: "#25D366", // verde do WhatsApp
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 40,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
