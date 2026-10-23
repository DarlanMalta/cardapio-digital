import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";

import BrandHero from "../components/BrandHero";
import MenuSection from "../components/menu/MenuSection";
import CategoryNavigation from "../components/navigation/CategoryNavigation";
import { categories, products, type CategoryId } from "../data/products";
import { colors, layout } from "../theme";

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
          (categoryPositions.current[category.id] ??
            Number.POSITIVE_INFINITY) <= currentPosition,
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

      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={scrollToCategory}
        onLayout={(event) => {
          categoryNavigationHeight.current = event.nativeEvent.layout.height;
        }}
      />

      <View
        style={styles.menuList}
        onLayout={(event) => {
          menuListPosition.current = event.nativeEvent.layout.y;
        }}
      >
        <View style={styles.menuIntroduction}>
          <Text style={styles.menuEyebrow}>NOSSO CARDÁPIO</Text>
          <Text style={styles.menuTitle}>Qual vai ser o de hoje?</Text>
          <Text style={styles.menuDescription}>
            Navegue pelas categorias e conheça as opções disponíveis.
          </Text>
        </View>

        {categories.map((category, categoryIndex) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id,
          );
          return (
            <MenuSection
              key={category.id}
              category={category}
              categoryIndex={categoryIndex}
              products={categoryProducts}
              onLayout={(event) => {
                categoryPositions.current[category.id] =
                  event.nativeEvent.layout.y;
              }}
            />
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
  menuList: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  menuIntroduction: {
    width: "100%",
    maxWidth: 620,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 58,
  },
  menuEyebrow: {
    color: colors.accentStrong,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "800",
    letterSpacing: 2.4,
    textAlign: "center",
  },
  menuTitle: {
    marginTop: 9,
    color: colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    letterSpacing: -1,
    textAlign: "center",
  },
  menuDescription: {
    maxWidth: 560,
    marginTop: 10,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
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
