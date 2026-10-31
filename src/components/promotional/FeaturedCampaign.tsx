import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { breakpoints, colors, radius, spacing, typography } from "../../theme";
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
  const isMobile = width < breakpoints.mobile;
  const isNarrow = width <= breakpoints.narrow;
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
          <MaterialCommunityIcons
            name="fire"
            size={16}
            color={colors.ember}
            style={styles.badgeIcon}
          />
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

        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>APENAS</Text>
            <Text style={[styles.price, isNarrow && styles.priceNarrow]}>
              {formatPrice(product.price)}
            </Text>
          </View>

          <View style={[styles.action, isNarrow && styles.actionNarrow]}>
            <Text
              style={[styles.actionText, isNarrow && styles.actionTextNarrow]}
            >
              {campaign.ctaLabel}
            </Text>
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
    padding: spacing.md,
  },
  copyNarrow: {
    minWidth: 0,
    padding: spacing.sm,
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(255, 75, 31, 0.12)",
    borderWidth: 1,
    borderColor: "rgba(255, 75, 31, 0.28)",
    borderRadius: radius.pill,
  },
  badgeIcon: {
    marginTop: -1,
  },
  badgeText: {
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.2,
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
    fontSize: 32,
    lineHeight: 35,
    marginTop: 14,
  },
  titleNarrow: {
    fontSize: 28,
    lineHeight: 31,
    letterSpacing: -1.2,
  },
  description: {
    maxWidth: 400,
    marginTop: 10,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.borderDark,
  },
  priceContainer: {
    justifyContent: "center",
  },
  priceLabel: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 11,
    fontWeight: "900",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  price: {
    color: colors.emberStrong,
    fontFamily: typography.display,
    fontSize: 27,
    lineHeight: 31,
    fontWeight: "900",
  },
  priceNarrow: {
    fontSize: 22,
    lineHeight: 26,
  },
  action: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: radius.pill,
    backgroundColor: colors.ember,
    flexShrink: 0,
  },
  actionNarrow: {
    paddingHorizontal: 11,
    gap: 6,
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
  actionTextNarrow: {
    fontSize: 9,
    letterSpacing: 0.5,
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
    minHeight: 220,
    height: 220,
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
