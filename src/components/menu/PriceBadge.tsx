import { StyleSheet, Text, View } from "react-native";

import { colors, typography } from "../../theme";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  price: number;
  compact?: boolean;
};

export default function PriceBadge({ price, compact = false }: Props) {
  return (
    <View style={[styles.badge, compact && styles.badgeCompact]}>
      <Text style={[styles.price, compact && styles.priceCompact]}>
        {formatPrice(price)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ember,
    borderWidth: 3,
    borderColor: colors.paperStrong,
    transform: [{ rotate: "-7deg" }],
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 7,
  },
  badgeCompact: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  prefix: {
    color: colors.white,
    fontFamily: typography.body,
    fontSize: 8,
    lineHeight: 10,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  price: {
    marginTop: 1,
    color: colors.white,
    fontFamily: typography.display,
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  priceCompact: {
    fontSize: 14,
    lineHeight: 18,
  },
});
