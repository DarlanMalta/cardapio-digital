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
        <View style={styles.badge}>
          <View style={styles.badgeRule} />
          <Text style={styles.badgeText}>{campaign.badge}</Text>
        </View>

        <Text
          style={[
            styles.title,
            isMobile && styles.titleMobile,
            isNarrow && styles.titleNarrow,
          ]}
        >
          {product.name}
        </Text>
        <Text style={styles.description}>{campaign.description}</Text>

        <View style={[styles.footer, isNarrow && styles.footerNarrow]}>
          <Text style={styles.price}>{formatPrice(product.price)}</Text>

          <View style={[styles.action, isNarrow && styles.actionNarrow]}>
            <Text style={styles.actionText}>{campaign.ctaLabel}</Text>
            <Text style={styles.actionArrow}>→</Text>
          </View>
        </View>
      </View>

      <View style={[styles.visual, isMobile && styles.visualMobile]}>
        <Text style={styles.watermark}>NB</Text>
        <View style={styles.visualGlow} />
        <View style={styles.visualRing} />
        <Image
          source={product.image}
          style={styles.image}
          resizeMode="contain"
          accessible
          accessibilityLabel={`Imagem de ${product.name}`}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 340,
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
    marginBottom: spacing.xxl,
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
    flex: 0.95,
  },
  copyMobile: {
    width: "100%",
    padding: spacing.lg,
  },
  copyNarrow: {
    minWidth: 0,
    padding: spacing.md,
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badgeRule: {
    width: 28,
    height: 3,
    backgroundColor: colors.ember,
  },
  badgeText: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 540,
    marginTop: 22,
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 46,
    lineHeight: 48,
    fontWeight: "900",
    letterSpacing: -2,
    textTransform: "uppercase",
  },
  titleMobile: {
    fontSize: 36,
    lineHeight: 39,
  },
  titleNarrow: {
    fontSize: 31,
    lineHeight: 34,
    letterSpacing: -1.2,
  },
  description: {
    maxWidth: 400,
    marginTop: 12,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 16,
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.borderDark,
  },
  footerNarrow: {
    alignItems: "stretch",
  },
  price: {
    color: colors.emberStrong,
    fontFamily: typography.display,
    fontSize: 29,
    lineHeight: 33,
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
  actionNarrow: {
    width: "100%",
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
    flex: 1.05,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderLeftWidth: 1,
    borderLeftColor: colors.borderDark,
    backgroundColor: colors.inkSoft,
  },
  visualMobile: {
    minHeight: 235,
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderTopColor: colors.borderDark,
  },
  watermark: {
    position: "absolute",
    top: -42,
    right: -28,
    color: "rgba(255, 255, 255, 0.04)",
    fontFamily: typography.display,
    fontSize: 170,
    lineHeight: 182,
    fontWeight: "900",
    letterSpacing: -12,
  },
  visualGlow: {
    position: "absolute",
    bottom: -86,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: colors.emberSoft,
  },
  visualRing: {
    position: "absolute",
    bottom: -54,
    width: 280,
    height: 280,
    borderWidth: 1,
    borderColor: "rgba(255, 106, 36, 0.45)",
    borderRadius: 140,
  },
  image: {
    width: "108%",
    height: 285,
    zIndex: 1,
  },
});
