//BARRA HORIZONTAL DAS CATEGORIAS

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
} from "react-native";
import type { CategoryId, CategoryType } from "../../data/products";
import { breakpoints, colors, layout, radius, typography } from "../../theme";
import { formatIndex } from "../../utils/formatIndex";
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
  const { width } = useWindowDimensions();
  const isDesktop = width >= breakpoints.mobile;
  const [showRightFade, setShowRightFade] = useState(true);
  const navigationScrollRef = useRef<ScrollView>(null);
  const categoryLayouts = useRef<Partial<Record<CategoryId, CategoryLayout>>>(
    {},
  );
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
          onScroll={(event) => {
            const { contentOffset, contentSize, layoutMeasurement } =
              event.nativeEvent;
            const reachedEnd =
              contentOffset.x + layoutMeasurement.width >=
              contentSize.width - 15;
            if (showRightFade === reachedEnd) {
              setShowRightFade(!reachedEnd);
            }
          }}
          scrollEventThrottle={16}
          onLayout={(event) => {
            setNavigationWidth(event.nativeEvent.layout.width);
          }}
          contentContainerStyle={[
            styles.content,
            isDesktop && styles.contentCentered,
          ]}
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
                  {formatIndex(index + 1)}
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

        {!isDesktop && showRightFade && (
          <View style={styles.fadeRight} pointerEvents="none" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 20,
    backgroundColor: "rgba(11, 10, 9, 0.82)",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderDark,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 15,
    elevation: 8,
    ...Platform.select({
      web: {
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      } as Record<string, string>,
    }),
  },
  frame: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    minHeight: layout.navigationHeight,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  fadeRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 34,
    zIndex: 10,
    ...Platform.select({
      web: {
        background:
          "linear-gradient(to right, rgba(11, 10, 9, 0) 0%, rgba(11, 10, 9, 0.95) 100%)",
        pointerEvents: "none",
      } as Record<string, string>,
    }),
  },
  content: {
    flexGrow: 1,
    minHeight: layout.navigationHeight,
    alignItems: "center",
    paddingHorizontal: layout.horizontalPadding,
    paddingVertical: 12,
    gap: CATEGORY_GAP,
  },
  contentCentered: {
    justifyContent: "center",
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
