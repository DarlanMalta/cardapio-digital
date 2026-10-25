import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import type { CampaignType } from "../../data/campaigns";
import type { ProductType } from "../../data/products";
import { colors, radius, spacing, typography } from "../../theme";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  campaign: CampaignType;
  product: ProductType;
  onSelectProduct: (product: ProductType) => void;
};

export default function FeaturedCampaign({
  campaign,
  product,
  onSelectProduct,
}: Props) {
  const { width } = useWindowDimensions();
  const isMobile = width < 720;
  const isNarrow = width <= 360;
  const featuredIngredients = product.ingredients.slice(0, 3);

  if (!campaign.active) {
    return null;
  }

  return (
    <Pressable
      onPress={() => onSelectProduct(product)}
      accessibilityRole="button"
      accessibilityLabel={`Conhecer ${product.name}`}
      accessibilityHint="Abre os detalhes do produto em destaque"
      style={({ pressed }) => [
        styles.container,
        isMobile && styles.containerMobile,
        pressed && styles.containerPressed,
      ]}
    >
      <View
        style={[
          styles.copy,
          !isMobile && styles.copyDesktop,
          isMobile && styles.copyMobile,
          isNarrow && styles.copyNarrow,
        ]}
      >
        <View style={styles.previewLabel}>
          <View style={styles.previewDot} />
          <Text style={styles.previewText}>{campaign.badge}</Text>
        </View>

        <Text style={styles.eyebrow}>{campaign.eyebrow}</Text>
        <Text
          style={[
            styles.title,
            isMobile && styles.titleMobile,
            isNarrow && styles.titleNarrow,
          ]}
        >
          {campaign.title}
        </Text>
        <Text style={styles.description}>{product.description}</Text>

        {!isNarrow ? (
          <View style={styles.ingredients}>
            {featuredIngredients.map((ingredient) => (
              <View key={ingredient} style={styles.ingredientPill}>
                <Text
                  style={styles.ingredientText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {ingredient}
                </Text>
              </View>
            ))}
          </View>
        ) : null}

        <View style={styles.footer}>
          <View>
            <Text style={styles.priceLabel}>POR</Text>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>
          </View>

          <View style={styles.action}>
            <Text style={styles.actionText}>{campaign.ctaLabel}</Text>
            <Text style={styles.actionArrow}>→</Text>
          </View>
        </View>
      </View>

      <View style={[styles.visual, isMobile && styles.visualMobile]}>
        <Text style={styles.watermark}>NB</Text>
        <View style={styles.visualRingLarge} />
        <View style={styles.visualRingSmall} />
        <View style={styles.visualLabel}>
          <Text style={styles.visualLabelText}>ASSINATURA DA CASA</Text>
        </View>
        <Image
          source={product.image}
          style={styles.image}
          resizeMode="contain"
          accessible
          accessibilityLabel={product.imageAlt}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
    marginBottom: spacing.section,
    borderRadius: radius.lg,
    backgroundColor: colors.ink,
    borderWidth: 1,
    borderColor: colors.borderDark,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.2,
    shadowRadius: 26,
    elevation: 6,
  },
  containerMobile: {
    flexDirection: "column",
  },
  containerPressed: {
    opacity: 0.94,
    transform: [{ scale: 0.995 }],
  },
  copy: {
    minWidth: 280,
    justifyContent: "center",
    padding: spacing.xl,
    zIndex: 2,
  },
  copyDesktop: {
    flex: 1.1,
  },
  copyMobile: {
    width: "100%",
  },
  copyNarrow: {
    minWidth: 0,
    padding: spacing.lg,
  },
  previewLabel: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 28,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: radius.pill,
    backgroundColor: colors.inkSoft,
  },
  previewDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.ember,
  },
  previewText: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  eyebrow: {
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "900",
    letterSpacing: typography.labelLetterSpacing,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 540,
    marginTop: 12,
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 42,
    lineHeight: 45,
    fontWeight: "900",
    letterSpacing: -1.8,
    textTransform: "uppercase",
  },
  titleMobile: {
    fontSize: 31,
    lineHeight: 35,
  },
  titleNarrow: {
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: -1.2,
  },
  description: {
    maxWidth: 480,
    marginTop: 16,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  ingredients: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 20,
  },
  ingredientPill: {
    maxWidth: "100%",
    flexShrink: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: radius.pill,
    backgroundColor: colors.charcoal,
  },
  ingredientText: {
    flexShrink: 1,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 18,
    marginTop: 26,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: colors.borderDark,
  },
  priceLabel: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  price: {
    marginTop: 3,
    color: colors.emberStrong,
    fontFamily: typography.display,
    fontSize: 27,
    lineHeight: 31,
    fontWeight: "900",
  },
  action: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: radius.pill,
    backgroundColor: colors.ember,
  },
  actionText: {
    color: colors.white,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  actionArrow: {
    color: colors.white,
    fontFamily: typography.body,
    fontSize: 17,
    lineHeight: 18,
    fontWeight: "700",
  },
  visual: {
    minWidth: 280,
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: colors.emberDark,
  },
  visualMobile: {
    minHeight: 270,
  },
  watermark: {
    position: "absolute",
    top: -35,
    right: -24,
    color: "rgba(255, 255, 255, 0.09)",
    fontFamily: typography.display,
    fontSize: 150,
    lineHeight: 164,
    fontWeight: "900",
    letterSpacing: -12,
  },
  visualRingLarge: {
    position: "absolute",
    width: 290,
    height: 290,
    borderWidth: 1,
    borderColor: "rgba(255, 248, 237, 0.18)",
    borderRadius: 145,
  },
  visualRingSmall: {
    position: "absolute",
    width: 225,
    height: 225,
    borderWidth: 1,
    borderColor: "rgba(255, 248, 237, 0.12)",
    borderRadius: 113,
    backgroundColor: "rgba(255, 155, 77, 0.12)",
  },
  visualLabel: {
    position: "absolute",
    top: 22,
    left: 22,
    zIndex: 2,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: radius.pill,
    backgroundColor: colors.paperStrong,
  },
  visualLabelText: {
    color: colors.emberDark,
    fontFamily: typography.body,
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "900",
    letterSpacing: 1.1,
  },
  image: {
    width: "112%",
    height: 300,
    zIndex: 1,
  },
});
