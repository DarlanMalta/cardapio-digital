import { StyleSheet, Text, View, type LayoutChangeEvent } from "react-native";

import type { CategoryType, ProductType } from "../../data/products";
import { colors } from "../../theme";
import ProductCard from "../ProductCard";

type Props = {
  category: CategoryType;
  categoryIndex: number;
  products: ProductType[];
  onLayout: (event: LayoutChangeEvent) => void;
};

export default function MenuSection({
  category,
  categoryIndex,
  products,
  onLayout,
}: Props) {
  const itemLabel = products.length === 1 ? "item" : "itens";

  return (
    <View style={styles.section} onLayout={onLayout}>
      <View style={styles.heading}>
        <View style={styles.titleGroup}>
          <Text style={styles.index}>
            {String(categoryIndex + 1).padStart(2, "0")}
          </Text>
          <Text style={styles.title} accessibilityRole="header">
            {category.label}
          </Text>
        </View>

        <Text style={styles.count}>
          {products.length} {itemLabel}
        </Text>
      </View>

      <View style={styles.productGrid}>
        {products.map((product) => (
          <View key={product.id} style={styles.productSlot}>
            <ProductCard product={product} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    marginBottom: 68,
  },
  heading: {
    marginBottom: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  titleGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 11,
  },
  index: {
    color: colors.accentStrong,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "900",
    letterSpacing: 1.2,
  },
  title: {
    flexShrink: 1,
    color: colors.text,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  count: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
  },
  productGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 16,
    rowGap: 16,
  },
  productSlot: {
    minWidth: 280,
    maxWidth: 530,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 430,
  },
});
