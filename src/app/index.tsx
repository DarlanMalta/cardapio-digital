import { useRef, useState } from "react";
import {
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, layout } from "../theme";
import BrandHero from "../components/BrandHero";
import ProductCard from "../components/ProductCard";
import { categories, products, type CategoryId } from "../data/products";

type CategoryPositions = Partial<Record<CategoryId, number>>;

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    categories[0].id,
  );
  const menuScrollRef = useRef<ScrollView>(null);
  const menuListPosition = useRef(0);
  const categoryNavigationHeight = useRef(0);
  const categoryPositions = useRef<CategoryPositions>({});

  const scrollToCategory = (categoryId: CategoryId) => {
    const categoryPosition = categoryPositions.current[categoryId];

    if (categoryPosition === undefined) {
      return;
    }

    setActiveCategory(categoryId);

    const scrollPosition =
      menuListPosition.current +
      categoryPosition -
      categoryNavigationHeight.current;

    menuScrollRef.current?.scrollTo({
      y: Math.max(0, scrollPosition),
      animated: true,
    });
  };

  const updateActiveCategory = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const reachedEnd =
      contentOffset.y + layoutMeasurement.height >= contentSize.height - 16;

    if (reachedEnd) {
      setActiveCategory(categories[categories.length - 1].id);
      return;
    }

    const currentPosition =
      contentOffset.y +
      categoryNavigationHeight.current -
      menuListPosition.current +
      8;

    const visibleCategory = [...categories]
      .reverse()
      .find(
        (category) =>
          (categoryPositions.current[category.id] ?? Number.POSITIVE_INFINITY) <=
          currentPosition,
      );

    if (visibleCategory && visibleCategory.id !== activeCategory) {
      setActiveCategory(visibleCategory.id);
    }
  };

  return (
    <ScrollView
      ref={menuScrollRef}
      style={styles.container}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
      onScroll={updateActiveCategory}
      scrollEventThrottle={16}
    >
      <BrandHero />

      <View
        style={styles.categoryNavigation}
        onLayout={(event) => {
          categoryNavigationHeight.current = event.nativeEvent.layout.height;
        }}
      >
        <View style={styles.categoryNavigationFrame}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryNavigationContent}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <Pressable
                  key={category.id}
                  onPress={() => scrollToCategory(category.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Ir para ${category.label}`}
                  accessibilityState={{ selected: isActive }}
                  style={({ pressed }) => [
                    styles.categoryChip,
                    isActive && styles.categoryChipActive,
                    pressed && styles.categoryChipPressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      isActive && styles.categoryChipTextActive,
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

      <View
        style={styles.menuList}
        onLayout={(event) => {
          menuListPosition.current = event.nativeEvent.layout.y;
        }}
      >
        <View style={styles.menuIntroduction}>
          <Text style={styles.menuEyebrow}>NOSSO CARDÁPIO</Text>
          <Text style={styles.menuTitle}>Escolha seu próximo favorito.</Text>
          <Text style={styles.menuDescription}>
            Navegue pelas categorias e conheça as opções disponíveis.
          </Text>
        </View>

        {categories.map((category, categoryIndex) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id,
          );
          const itemLabel = categoryProducts.length === 1 ? "item" : "itens";

          return (
            <View
              key={category.id}
              style={styles.categorySection}
              onLayout={(event) => {
                categoryPositions.current[category.id] =
                  event.nativeEvent.layout.y;
              }}
            >
              <View style={styles.categoryHeading}>
                <View style={styles.categoryTitleGroup}>
                  <Text style={styles.categoryIndex}>
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </Text>
                  <Text style={styles.categoryTitle}>{category.label}</Text>
                </View>

                <Text style={styles.categoryCount}>
                  {categoryProducts.length} {itemLabel}
                </Text>
              </View>

              <View style={styles.productGrid}>
                {categoryProducts.map((product) => (
                  <View
                    key={product.id}
                    style={styles.productSlot}
                  >
                    <ProductCard product={product} />
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View>
            <Text style={styles.footerBrand}>NA BRASA</Text>
            <Text style={styles.footerSlogan}>O 01 DA CITY</Text>
          </View>

          <Text style={styles.footerNote}>
            Cardápio demonstrativo • imagens e informações provisórias
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pageContent: {
    width: "100%",
    backgroundColor: colors.background,
  },
  categoryNavigation: {
    width: "100%",
    zIndex: 10,
    backgroundColor: "rgba(9, 9, 9, 0.98)",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryNavigationFrame: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
  },
  categoryNavigationContent: {
    minHeight: 68,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 11,
    gap: 10,
  },
  categoryChip: {
    minHeight: 44,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
  },
  categoryChipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accentStrong,
  },
  categoryChipPressed: {
    opacity: 0.68,
  },
  categoryChipText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
  },
  categoryChipTextActive: {
    color: colors.white,
  },
  menuList: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  menuIntroduction: {
    maxWidth: 620,
    marginBottom: 58,
  },
  menuEyebrow: {
    color: colors.accentStrong,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "800",
    letterSpacing: 2.4,
  },
  menuTitle: {
    marginTop: 9,
    color: colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    letterSpacing: -1,
  },
  menuDescription: {
    marginTop: 10,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  categorySection: {
    width: "100%",
    marginBottom: 68,
  },
  categoryHeading: {
    marginBottom: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryTitleGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 11,
  },
  categoryIndex: {
    color: colors.accentStrong,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "900",
    letterSpacing: 1.2,
  },
  categoryTitle: {
    flexShrink: 1,
    color: colors.text,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  categoryCount: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
  },
  productGrid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 16,
    rowGap: 16,
  },
  productSlot: {
    minWidth: 280,
    maxWidth: 530,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 430,
  },
  footer: {
    width: "100%",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerContent: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingVertical: 36,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  footerBrand: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "900",
    letterSpacing: 2.2,
  },
  footerSlogan: {
    marginTop: 4,
    color: colors.accentStrong,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  footerNote: {
    maxWidth: 360,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
});
