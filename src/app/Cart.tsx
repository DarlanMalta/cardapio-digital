import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CartItemCard from "./components/CartItemCard";
import { useCart } from "./context/CartContext";

export default function Cart() {
  const router = useRouter();

  // CONECTANDO AO CONTEXT
  // pegamos tudo que a tela do carrinho precisa
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // CALCULANDO O TOTAL
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0, // ← valor inicial do acumulador
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.textHeader}>SEU CARRINHO</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.buttonRoute}>TELA INICIAL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/menu")}>
            <Text style={styles.buttonRoute}>CARDÁPIO</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* LISTA DE ITENS OU MENSAGEM DE CARRINHO VAZIO */}
      {cart.length === 0 ? (
        // se o carrinho estiver vazio, exibe mensagem
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Seu carrinho está vazio 🛒</Text>
        </View>
      ) : (
        // se tiver itens, exibe a lista
        <FlatList
          data={cart}
          keyExtractor={(item) => item.product.id.toString()}
          renderItem={({ item }) => (
            <CartItemCard
              item={item}
              onRemove={removeFromCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      {/* RODAPÉ COM TOTAL E AÇÕES */}
      {cart.length > 0 && (
        <View style={styles.footer}>
          {/* TOTAL */}
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

          {/* LIMPAR CARRINHO */}
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearButtonText}>Limpar carrinho</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerButtons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#444",
  },
  buttonRoute: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#ff6600",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    textAlign: "center",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#aaa",
  },
  list: {
    paddingVertical: 12,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 16,
    elevation: 4,
    shadowColor: "#0037ff",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    gap: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  clearButton: {
    backgroundColor: "#ff6600",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});
