//BARRA HORIZONTAL DAS CATEGORIAS

import { useCallback, useEffect, useRef, useState } from "react";
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

type CategoryLayout = {
  width: number;
};

const CATEGORY_GAP = 8;

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
  const navigationScrollRef = useRef<ScrollView>(null);
  const categoryLayouts = useRef<
    Partial<Record<CategoryId, CategoryLayout>>
  >({});
  const [navigationWidth, setNavigationWidth] = useState(0);

  const centerCategory = useCallback(
    (categoryId: CategoryId, animated = true) => {
      const categoryLayout = categoryLayouts.current[categoryId];

      if (!categoryLayout || navigationWidth === 0) {
        return;
      }

      const categoryIndex = categories.findIndex(
        (category) => category.id === categoryId,
      );
      const previousCategoriesWidth = categories
        .slice(0, categoryIndex)
        .reduce((total, category) => {
          const measuredCategory = categoryLayouts.current[category.id];

          return measuredCategory ? total + measuredCategory.width : total;
        }, 0);
      const categoryCenter =
        layout.horizontalPadding +
        previousCategoriesWidth +
        categoryIndex * CATEGORY_GAP +
        categoryLayout.width / 2;
      const scrollPosition = categoryCenter - navigationWidth / 2;

      navigationScrollRef.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated,
      });
    },
    [categories, navigationWidth],
  );

  useEffect(() => {
    centerCategory(activeCategory);
  }, [activeCategory, centerCategory]);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.frame}>
        <ScrollView
          ref={navigationScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onLayout={(event) => {
            setNavigationWidth(event.nativeEvent.layout.width);
          }}
          contentContainerStyle={styles.content}
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <Pressable
                key={category.id}
                onPress={() => onSelectCategory(category.id)}
                onLayout={(event) => {
                  const { width } = event.nativeEvent.layout;
                  categoryLayouts.current[category.id] = { width };

                  if (category.id === activeCategory) {
                    centerCategory(category.id, false);
                  }
                }}
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
    paddingHorizontal: layout.horizontalPadding,
    paddingVertical: 12,
    gap: CATEGORY_GAP,
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
