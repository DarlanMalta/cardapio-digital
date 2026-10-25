import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import type { ProductType } from "../data/products";
import { colors, radius, spacing, typography } from "../theme";
import IngredientChip from "./menu/IngredientChip";
import PriceBadge from "./menu/PriceBadge";

type Props = {
  product: ProductType;
  productIndex: number;
  onPress: (product: ProductType) => void;
};

export default function ProductCard({ product, productIndex, onPress }: Props) {
  const { width } = useWindowDimensions();
  const isMobile = width < 560;
  const isNarrow = width <= 360;
  const useCoverImage = !["burger", "combos"].includes(product.category);

  return (
    <Pressable
      onPress={() => onPress(product)}
      accessibilityRole="button"
      accessibilityLabel={`Ver detalhes de ${product.name}`}
      accessibilityHint="Abre a apresentação completa do produto"
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View
        style={[
          styles.visual,
          isMobile && styles.visualMobile,
          isNarrow && styles.visualNarrow,
        ]}
      >
        <Text style={styles.watermark}>
          {String(productIndex + 1).padStart(2, "0")}
        </Text>

        {product.tag ? (
          <View style={styles.tag}>
            <Text style={styles.tagText}>{product.tag}</Text>
          </View>
        ) : null}

        <Image
          source={product.image}
          style={styles.image}
          resizeMode={useCoverImage ? "cover" : "contain"}
          accessible
          accessibilityLabel={product.imageAlt}
        />

        <View style={styles.pricePosition} pointerEvents="none">
          <PriceBadge price={product.price} compact={isMobile} />
        </View>
      </View>

      <View style={[styles.info, isNarrow && styles.infoNarrow]}>
        <View style={styles.headingRow}>
          <Text style={styles.index}>
            #{String(productIndex + 1).padStart(2, "0")}
          </Text>
          <View style={styles.headingLine} />
        </View>

        <Text
          style={[
            styles.name,
            isMobile && styles.nameMobile,
            isNarrow && styles.nameNarrow,
          ]}
        >
          {product.name}
        </Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.ingredients}>
          {product.ingredients.slice(0, 4).map((ingredient) => (
            <IngredientChip key={ingredient} label={ingredient} tone="paper" />
          ))}
        </View>

        <View style={styles.detailsLink}>
          <Text style={styles.detailsLinkText}>VER DE PERTO</Text>
          <Text style={styles.detailsArrow}>→</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.borderPaper,
    borderRadius: radius.lg,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 5,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  visual: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.paperMuted,
  },
  visualMobile: {
    height: 255,
  },
  visualNarrow: {
    height: 230,
  },
  watermark: {
    position: "absolute",
    left: -8,
    bottom: -33,
    color: "rgba(26, 21, 17, 0.06)",
    fontFamily: typography.display,
    fontSize: 154,
    lineHeight: 164,
    fontWeight: "900",
    letterSpacing: -12,
  },
  tag: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
    zIndex: 3,
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: radius.pill,
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.borderPaper,
  },
  tagText: {
    color: colors.textOnPaper,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "900",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pricePosition: {
    position: "absolute",
    right: spacing.md,
    bottom: -2,
    zIndex: 4,
  },
  info: {
    padding: spacing.lg,
  },
  infoNarrow: {
    padding: spacing.md,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  index: {
    color: colors.emberDark,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  headingLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderPaper,
  },
  name: {
    marginTop: 14,
    color: colors.textOnPaper,
    fontFamily: typography.display,
    fontSize: 29,
    lineHeight: 33,
    fontWeight: "900",
    letterSpacing: -1.1,
    textTransform: "uppercase",
  },
  nameMobile: {
    fontSize: 25,
    lineHeight: 29,
  },
  nameNarrow: {
    fontSize: 23,
    lineHeight: 27,
  },
  description: {
    marginTop: 10,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  ingredients: {
    marginTop: 17,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  detailsLink: {
    alignSelf: "flex-start",
    marginTop: 23,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: colors.ember,
  },
  detailsLinkText: {
    color: colors.textOnPaper,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  detailsArrow: {
    color: colors.textOnPaper,
    fontSize: 17,
    lineHeight: 17,
    fontWeight: "700",
  },
});
