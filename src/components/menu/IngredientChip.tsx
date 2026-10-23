import { StyleSheet, Text, View } from "react-native";

import { colors, radius, typography } from "../../theme";

type Props = {
  label: string;
  tone?: "paper" | "dark" | "accent";
};

export default function IngredientChip({ label, tone = "paper" }: Props) {
  return (
    <View
      style={[
        styles.chip,
        tone === "dark" && styles.chipDark,
        tone === "accent" && styles.chipAccent,
      ]}
    >
      <Text
        style={[
          styles.label,
          tone === "dark" && styles.labelDark,
          tone === "accent" && styles.labelAccent,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 28,
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: radius.pill,
    backgroundColor: "rgba(26, 21, 17, 0.07)",
    borderWidth: 1,
    borderColor: "rgba(26, 21, 17, 0.12)",
  },
  chipDark: {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    borderColor: "rgba(255, 255, 255, 0.13)",
  },
  chipAccent: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  label: {
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "700",
  },
  labelDark: {
    color: colors.textMuted,
  },
  labelAccent: {
    color: colors.white,
  },
});
