import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
} from "react-native";

import type { CategoryType, ProductType } from "../../data/products";
import { colors, radius, spacing, typography } from "../../theme";
import ProductCard from "../ProductCard";

type Props = {
  category: CategoryType;
  categoryIndex: number;
  products: ProductType[];
  onLayout: (event: LayoutChangeEvent) => void;
  onSelectProduct: (product: ProductType) => void;
};

export default function MenuSection({
  category,
  categoryIndex,
  products,
  onLayout,
  onSelectProduct,
}: Props) {
  const { width } = useWindowDimensions();
  const isNarrow = width <= 420;
  const usesCompactGrid = category.variant === "compact";
  const usesCompactTitle = isNarrow && category.label.length > 13;
  const itemLabel = products.length === 1 ? "item" : "itens";

  return (
    <View style={styles.section} onLayout={onLayout}>
      <View
        style={[styles.categoryHeader, isNarrow && styles.categoryHeaderNarrow]}
      >
        <View
          style={[styles.headingCopy, isNarrow && styles.headingCopyNarrow]}
        >
          <View style={styles.eyebrowRow}>
            <Text style={styles.sectionIndex}>
              {String(categoryIndex + 1).padStart(2, "0")}
            </Text>
            <Text style={styles.eyebrow}>{category.eyebrow}</Text>
          </View>

          <Text
            accessibilityRole="header"
            style={[
              styles.title,
              isNarrow && styles.titleNarrow,
              usesCompactTitle && styles.titleCompactNarrow,
            ]}
          >
            {category.label}
          </Text>
        </View>

        <View style={[styles.count, isNarrow && styles.countNarrow]}>
          <Text style={styles.countValue}>
            {String(products.length).padStart(2, "0")}
          </Text>
          <Text style={styles.countLabel}>{itemLabel}</Text>
        </View>
      </View>

      <View style={styles.productGrid}>
        {products.map((product, productIndex) => (
          <View
            key={product.id}
            style={[
              styles.productSlot,
              usesCompactGrid && styles.productSlotCompact,
              isNarrow && styles.productSlotNarrow,
            ]}
          >
            <ProductCard
              product={product}
              productIndex={productIndex}
              onPress={onSelectProduct}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: "100%",
    marginBottom: spacing.section,
  },
  categoryHeader: {
    marginBottom: spacing.xxl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.lg,
    backgroundColor: colors.ink,
    borderWidth: 1,
    borderLeftWidth: 5,
    borderColor: colors.borderDark,
    borderLeftColor: colors.emberStrong,
    borderRadius: radius.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
  categoryHeaderNarrow: {
    marginBottom: 48,
    paddingVertical: 20,
    paddingHorizontal: spacing.md,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: spacing.md,
  },
  headingCopy: {
    minWidth: 220,
    flex: 1,
  },
  headingCopyNarrow: {
    width: "100%",
    minWidth: 0,
  },
  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectionIndex: {
    color: colors.paperStrong,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.3,
  },
  eyebrow: {
    color: "rgba(255, 255, 255, 0.66)",
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: typography.labelLetterSpacing,
    textTransform: "uppercase",
  },
  title: {
    marginTop: 10,
    color: colors.white,
    fontFamily: typography.display,
    fontSize: 42,
    lineHeight: 46,
    fontWeight: "900",
    letterSpacing: -1.8,
    textTransform: "uppercase",
  },
  titleNarrow: {
    fontSize: 27,
    lineHeight: 31,
    letterSpacing: -1.2,
  },
  titleCompactNarrow: {
    fontSize: 23,
    lineHeight: 27,
    letterSpacing: -1,
  },
  count: {
    minWidth: 72,
    alignItems: "flex-end",
    paddingLeft: spacing.md,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(255, 255, 255, 0.22)",
  },
  countNarrow: {
    width: "100%",
    minWidth: 0,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
    paddingTop: 12,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.22)",
    borderLeftWidth: 0,
  },
  countValue: {
    color: colors.white,
    fontFamily: typography.display,
    fontSize: 27,
    lineHeight: 30,
    fontWeight: "900",
  },
  countLabel: {
    marginTop: 1,
    color: "rgba(255, 255, 255, 0.62)",
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "800",
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  productGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: spacing.md,
    rowGap: spacing.md,
  },
  productSlot: {
    minWidth: 280,
    maxWidth: 554,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 450,
  },
  productSlotCompact: {
    flexBasis: 330,
  },
  productSlotNarrow: {
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    flexBasis: "auto",
  },
});
