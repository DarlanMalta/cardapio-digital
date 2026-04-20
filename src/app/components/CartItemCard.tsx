import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CartItem } from "../data/products";

// Esse componente precisa saber: qual item exibir e quais funções chamar, a partir das props o meu componente consome esses dados
type CartItemCardProps = {
  item: CartItem; // o item do carrinho (produto + quantity)
  onRemove: (productId: number) => void; // remove o item inteiro
  onIncrease: (productId: number) => void; // aumenta quantity em 1
  onDecrease: (productId: number) => void; // diminui quantity em 1
};

export default function CartItemCard({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}: CartItemCardProps) {
  return (
    <View style={styles.container}>
      {/* IMAGEM DO PRODUTO */}
      <Image source={item.product.image} style={styles.image} />

      {/* INFORMAÇÕES DO PRODUTO */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>R$ {item.product.price.toFixed(2)}</Text>

        {/* CONTROLES DE QUANTIDADE */}
        <View style={styles.quantityContainer}>
          {/* BOTÃO DE DIMINUIR */}
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onDecrease(item.product.id)}
          >
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>

          {/* QUANTIDADE ATUAL */}
          <Text style={styles.quantity}>{item.quantity}</Text>

          {/* BOTÃO DE AUMENTAR */}
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onIncrease(item.product.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* BOTÃO DE REMOVER O ITEM INTEIRO */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(item.product.id)}
      >
        <Text style={styles.removeButtonText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // imagem, info e botão lado a lado
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    elevation: 2, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    flex: 1, // ocupa o espaço restante entre a imagem e o lixo
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#ff6600",
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#ff6600",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 12,
    color: "#333",
  },
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    fontSize: 20,
  },
});
