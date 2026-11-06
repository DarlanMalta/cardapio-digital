import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, radius, spacing, typography } from "../theme";

const INSTAGRAM_URL = "https://www.instagram.com/nabrasaburger077/";

export function TableInfoFooter() {
  const handleOpenInstagram = () => {
    Linking.openURL(INSTAGRAM_URL).catch(() => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <MaterialCommunityIcons
          name="fire"
          size={16}
          color={colors.ember}
          style={styles.flameIcon}
        />
        <View style={styles.dividerLine} />
      </View>

      <Pressable
        onPress={handleOpenInstagram}
        accessibilityRole="link"
        accessibilityLabel="Abrir Instagram do Na Brasa"
        style={({ pressed }) => [
          styles.instagramButton,
          pressed && styles.instagramButtonPressed,
        ]}
      >
        <MaterialCommunityIcons
          name="instagram"
          size={18}
          color={colors.ember}
        />
        <Text style={styles.instagramText}>@NABRASABURGER077</Text>
      </Pressable>

      <Text style={styles.serviceNote}>
        Compartilhe sua experiência e marque a gente nos Stories!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: -42,
    alignItems: "center",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 280,
    marginBottom: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderPaper,
    opacity: 0.6,
  },
  flameIcon: {
    marginHorizontal: 12,
  },
  instagramButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.borderPaper,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: radius.pill,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.18s ease-in-out",
      } as Record<string, string>,
    }),
  },
  instagramButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
    backgroundColor: colors.paper,
  },
  instagramText: {
    fontFamily: typography.display,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: colors.textOnPaper,
  },
  serviceNote: {
    marginTop: spacing.md,
    fontFamily: typography.body,
    fontSize: 12,
    lineHeight: 18,
    color: colors.textOnPaperMuted,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
