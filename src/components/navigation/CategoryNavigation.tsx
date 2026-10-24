//BARRA HORIZONTAL DAS CATEGORIAS

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
} from "react-native";

import type { CategoryId, CategoryType } from "../../data/products";
import { colors, layout, radius, typography } from "../../theme";

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
        <View style={styles.miniBrand} accessibilityElementsHidden>
          <Text style={styles.miniBrandText}>NB</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {categories.map((category, index) => {
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
                  style={[styles.chipIndex, isActive && styles.chipIndexActive]}
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text
                  style={[styles.chipText, isActive && styles.chipTextActive]}
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
    zIndex: 20,
    backgroundColor: "rgba(11, 10, 9, 0.97)",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderDark,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 15,
    elevation: 8,
  },
  frame: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    minHeight: layout.navigationHeight,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: layout.horizontalPadding,
  },
  miniBrand: {
    width: 36,
    height: 36,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderRadius: 18,
    backgroundColor: colors.ember,
    transform: [{ rotate: "-5deg" }],
  },
  miniBrandText: {
    color: colors.white,
    fontFamily: typography.display,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  content: {
    flexGrow: 1,
    minHeight: layout.navigationHeight,
    alignItems: "center",
    paddingRight: layout.horizontalPadding,
    paddingVertical: 12,
    gap: 8,
  },
  chip: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.inkSoft,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: radius.pill,
  },
  chipActive: {
    backgroundColor: colors.ember,
    borderColor: colors.emberStrong,
  },
  chipPressed: {
    opacity: 0.7,
  },
  chipIndex: {
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "900",
    letterSpacing: 0.8,
  },
  chipIndexActive: {
    color: "rgba(255, 255, 255, 0.72)",
  },
  chipText: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800",
  },
  chipTextActive: {
    color: colors.white,
  },
});
