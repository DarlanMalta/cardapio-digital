import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
} from "react-native";

import type {
  CategoryType,
  ProductType,
} from "../../data/products";
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
  const isDark = category.variant === "dark";
  const isAccent = category.variant === "compact";
  const usesLightText = isDark || isAccent;
  const usesCompactTitle = isNarrow && category.label.length > 13;
  const itemLabel = products.length === 1 ? "item" : "itens";

  return (
    <View
      style={[
        styles.section,
        isDark && styles.sectionDark,
        isAccent && styles.sectionAccent,
        isNarrow && usesLightText && styles.sectionNarrow,
      ]}
      onLayout={onLayout}
    >
      <View style={[styles.heading, isNarrow && styles.headingNarrow]}>
        <View
          style={[styles.headingCopy, isNarrow && styles.headingCopyNarrow]}
        >
          <View style={styles.eyebrowRow}>
            <Text
              style={[
                styles.sectionIndex,
                usesLightText && styles.sectionIndexLight,
              ]}
            >
              {String(categoryIndex + 1).padStart(2, "0")}
            </Text>
            <Text
              style={[
                styles.eyebrow,
                usesLightText && styles.eyebrowLight,
              ]}
            >
              {category.eyebrow}
            </Text>
          </View>

          <Text
            accessibilityRole="header"
            style={[
              styles.title,
              usesLightText && styles.titleLight,
              isNarrow && styles.titleNarrow,
              usesCompactTitle && styles.titleCompactNarrow,
            ]}
          >
            {category.label}
          </Text>
          <Text
            style={[
              styles.description,
              usesLightText && styles.descriptionLight,
            ]}
          >
            {category.description}
          </Text>
        </View>

        <View
          style={[
            styles.count,
            usesLightText && styles.countLight,
            isNarrow && styles.countNarrow,
            isNarrow && usesLightText && styles.countNarrowLight,
          ]}
        >
          <Text
            style={[
              styles.countValue,
              usesLightText && styles.countValueLight,
            ]}
          >
            {String(products.length).padStart(2, "0")}
          </Text>
          <Text
            style={[
              styles.countLabel,
              usesLightText && styles.countLabelLight,
            ]}
          >
            {itemLabel}
          </Text>
        </View>
      </View>

      <View style={styles.productGrid}>
        {products.map((product, productIndex) => (
          <View
            key={product.id}
            style={[
              styles.productSlot,
              isAccent && styles.productSlotCompact,
              isNarrow && styles.productSlotNarrow,
            ]}
          >
            <ProductCard
              product={product}
              productIndex={productIndex}
              variant={category.variant}
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
  sectionDark: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.ink,
  },
  sectionAccent: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.ember,
  },
  sectionNarrow: {
    paddingHorizontal: spacing.sm,
  },
  heading: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: spacing.lg,
  },
  headingNarrow: {
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
    color: colors.emberDark,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.3,
  },
  sectionIndexLight: {
    color: colors.paperStrong,
  },
  eyebrow: {
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: typography.labelLetterSpacing,
    textTransform: "uppercase",
  },
  eyebrowLight: {
    color: "rgba(255, 255, 255, 0.66)",
  },
  title: {
    marginTop: 10,
    color: colors.textOnPaper,
    fontFamily: typography.display,
    fontSize: 42,
    lineHeight: 46,
    fontWeight: "900",
    letterSpacing: -1.8,
    textTransform: "uppercase",
  },
  titleLight: {
    color: colors.white,
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
  description: {
    maxWidth: 540,
    marginTop: 9,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  descriptionLight: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  count: {
    minWidth: 72,
    alignItems: "flex-end",
    paddingLeft: spacing.md,
    borderLeftWidth: 1,
    borderLeftColor: colors.borderPaper,
  },
  countLight: {
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
    borderTopColor: colors.borderPaper,
    borderLeftWidth: 0,
  },
  countNarrowLight: {
    borderTopColor: "rgba(255, 255, 255, 0.22)",
  },
  countValue: {
    color: colors.textOnPaper,
    fontFamily: typography.display,
    fontSize: 27,
    lineHeight: 30,
    fontWeight: "900",
  },
  countValueLight: {
    color: colors.white,
  },
  countLabel: {
    marginTop: 1,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "800",
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  countLabelLight: {
    color: "rgba(255, 255, 255, 0.62)",
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
