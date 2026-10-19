import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { colors } from "../theme";
import type { ProductType } from "../data/products";

type Props = {
  product: ProductType;
};

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function ProductCard({ product }: Props) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 390;

  return (
    <View
      style={styles.card}
      accessible
      accessibilityLabel={`${product.name}, ${product.description}, ${priceFormatter.format(product.price)}`}
    >
      <Image
        source={product.image}
        style={[styles.image, isSmallScreen && styles.imageSmall]}
        resizeMode="cover"
        accessible={false}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.footer}>
          <View style={styles.priceMarker} />
          <Text style={styles.price}>{priceFormatter.format(product.price)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 142,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    overflow: "hidden",
    backgroundColor: colors.surfaceRaised,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 4,
  },
  image: {
    width: 122,
    height: 122,
    backgroundColor: colors.surface,
    borderRadius: 13,
  },
  imageSmall: {
    width: 96,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingLeft: 16,
    paddingRight: 8,
  },
  name: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "800",
  },
  description: {
    marginTop: 7,
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  priceMarker: {
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.accent,
  },
  price: {
    color: colors.accentStrong,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "800",
  },
});
