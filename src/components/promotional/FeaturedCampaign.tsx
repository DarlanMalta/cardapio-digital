import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

import type { CampaignType } from "../../data/campaigns";
import { colors, radius, spacing, typography } from "../../theme";

type Props = {
  campaign: CampaignType;
};

export default function FeaturedCampaign({ campaign }: Props) {
  const { width } = useWindowDimensions();
  const isMobile = width < 720;

  if (!campaign.active) {
    return null;
  }

  return (
    <View style={[styles.container, isMobile && styles.containerMobile]}>
      <View style={styles.copy}>
        <View style={styles.previewLabel}>
          <View style={styles.previewDot} />
          <Text style={styles.previewText}>CONTEÚDO DEMONSTRATIVO</Text>
        </View>

        <Text style={styles.eyebrow}>{campaign.eyebrow}</Text>
        <Text style={[styles.title, isMobile && styles.titleMobile]}>
          {campaign.title}
        </Text>
        <Text style={styles.description}>{campaign.description}</Text>
      </View>

      <View style={[styles.visual, isMobile && styles.visualMobile]}>
        <Text style={styles.number}>01</Text>
        <View style={styles.visualGlow} />
        <Image
          source={campaign.image}
          style={styles.image}
          resizeMode="contain"
          accessible
          accessibilityLabel={campaign.imageAlt}
        />
      </View>
    </View>
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
  },
  containerMobile: {
    flexDirection: "column",
  },
  copy: {
    minWidth: 280,
    flex: 1.1,
    justifyContent: "center",
    padding: spacing.xl,
    zIndex: 2,
  },
  previewLabel: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 30,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: radius.pill,
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
  description: {
    maxWidth: 480,
    marginTop: 18,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
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
  number: {
    position: "absolute",
    top: -22,
    right: -8,
    color: "rgba(255, 255, 255, 0.09)",
    fontFamily: typography.display,
    fontSize: 170,
    lineHeight: 182,
    fontWeight: "900",
    letterSpacing: -14,
  },
  visualGlow: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(255, 155, 77, 0.18)",
  },
  image: {
    width: "110%",
    height: 300,
  },
});
