import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
} from "react-native";

import type { CategoryId, CategoryType } from "../../data/products";
import { colors, layout } from "../../theme";

type Props = {
  categories: readonly CategoryType[];
  activeCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
  onLayout: (event: LayoutChangeEvent) => void;
};

export default function CategoryNavigation({
  categories,
  activeCategory,
  onSelectCategory,
  onLayout,
}: Props) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.frame}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <Pressable
                key={category.id}
                onPress={() => onSelectCategory(category.id)}
                accessibilityRole="button"
                accessibilityLabel={`Ir para ${category.label}`}
                accessibilityState={{ selected: isActive }}
                style={({ pressed }) => [
                  styles.chip,
                  isActive && styles.chipActive,
                  pressed && styles.chipPressed,
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    isActive && styles.chipTextActive,
                  ]}
                >
                  {category.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 10,
    backgroundColor: "rgba(9, 9, 9, 0.98)",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  frame: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
  },
  content: {
    flexGrow: 1,
    minHeight: 68,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 11,
    gap: 10,
  },
  chip: {
    minHeight: 44,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
  },
  chipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accentStrong,
  },
  chipPressed: {
    opacity: 0.68,
  },
  chipText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
  },
  chipTextActive: {
    color: colors.white,
  },
});
