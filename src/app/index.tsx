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
import ProductDetailsModal from "../components/menu/ProductDetailsModal";
import CategoryNavigation from "../components/navigation/CategoryNavigation";
import FeaturedCampaign from "../components/promotional/FeaturedCampaign";
import { featuredCampaign } from "../data/campaigns";
import {
  categories,
  products,
  type CategoryId,
  type ProductType,
} from "../data/products";
import { colors, layout, spacing, typography } from "../theme";

type CategoryPositions = Partial<Record<CategoryId, number>>;

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    categories[0].id,
  );
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const menuScrollRef = useRef<ScrollView>(null);
  const menuListPosition = useRef(0);
  const categoryNavigationHeight = useRef(0);
  const categoryPositions = useRef<CategoryPositions>({});

  const scrollToMenu = () => {
    menuScrollRef.current?.scrollTo({
      y: Math.max(
        0,
        menuListPosition.current - categoryNavigationHeight.current,
      ),
      animated: true,
    });
  };

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

  const showAdjacentProduct = (direction: -1 | 1) => {
    if (!selectedProduct) {
      return;
    }

    const currentIndex = products.findIndex(
      (product) => product.id === selectedProduct.id,
    );
    const nextIndex =
      (currentIndex + direction + products.length) % products.length;

    setSelectedProduct(products[nextIndex]);
  };

  return (
    <>
      <ScrollView
        ref={menuScrollRef}
        style={styles.container}
        contentContainerStyle={styles.pageContent}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        onScroll={updateActiveCategory}
        scrollEventThrottle={16}
      >
        <BrandHero onExplore={scrollToMenu} />

        <CategoryNavigation
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={scrollToCategory}
          onLayout={(event) => {
            categoryNavigationHeight.current = event.nativeEvent.layout.height;
          }}
        />

        <View
          style={styles.menuSurface}
          onLayout={(event) => {
            menuListPosition.current = event.nativeEvent.layout.y;
          }}
        >
          <Text style={styles.paperWatermark} pointerEvents="none">
            NB
          </Text>

          <View style={styles.menuContent}>
            <View style={styles.menuIntroduction}>
              <View style={styles.introductionRule} />
              <Text style={styles.menuEyebrow}>NOSSO CARDÁPIO</Text>
              <Text style={styles.menuTitle}>Qual vai ser o de hoje?</Text>
              <Text style={styles.menuDescription}>
                Navegue pelas categorias e conheça as opções disponíveis.
              </Text>
            </View>

            <FeaturedCampaign campaign={featuredCampaign} />

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
                  onSelectProduct={setSelectedProduct}
                  onLayout={(event) => {
                    categoryPositions.current[category.id] =
                      event.nativeEvent.layout.y;
                  }}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerBrandGroup}>
              <View style={styles.footerMark}>
                <Text style={styles.footerMarkText}>NB</Text>
              </View>
              <View>
                <Text style={styles.footerBrand}>NA BRASA</Text>
                <Text style={styles.footerSlogan}>O 01 DA CITY</Text>
              </View>
            </View>

            <Text style={styles.footerNote}>
              Cardápio demonstrativo • imagens e informações provisórias
            </Text>
          </View>
        </View>
      </ScrollView>

      <ProductDetailsModal
        product={selectedProduct}
        visible={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onPrevious={() => showAdjacentProduct(-1)}
        onNext={() => showAdjacentProduct(1)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ink,
  },
  pageContent: {
    width: "100%",
    backgroundColor: colors.ink,
  },
  menuSurface: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: colors.paper,
  },
  paperWatermark: {
    position: "absolute",
    top: -55,
    right: -36,
    color: "rgba(26, 21, 17, 0.035)",
    fontFamily: typography.display,
    fontSize: 260,
    lineHeight: 275,
    fontWeight: "900",
    letterSpacing: -24,
    transform: [{ rotate: "-8deg" }],
  },
  menuContent: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingTop: 70,
    paddingHorizontal: layout.horizontalPadding,
    paddingBottom: 26,
  },
  menuIntroduction: {
    width: "100%",
    maxWidth: layout.readingMaxWidth,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  introductionRule: {
    width: 44,
    height: 4,
    marginBottom: 15,
    backgroundColor: colors.ember,
  },
  menuEyebrow: {
    color: colors.emberDark,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 2.3,
    textAlign: "center",
  },
  menuTitle: {
    marginTop: 10,
    color: colors.textOnPaper,
    fontFamily: typography.display,
    fontSize: 43,
    lineHeight: 47,
    fontWeight: "900",
    letterSpacing: -1.9,
    textAlign: "center",
    textTransform: "uppercase",
  },
  menuDescription: {
    maxWidth: 560,
    marginTop: 12,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    backgroundColor: colors.ink,
    borderTopWidth: 1,
    borderTopColor: colors.borderDark,
  },
  footerContent: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    paddingVertical: 40,
    paddingHorizontal: layout.horizontalPadding,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  footerBrandGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  footerMark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ember,
    transform: [{ rotate: "-5deg" }],
  },
  footerMarkText: {
    color: colors.white,
    fontFamily: typography.display,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  footerBrand: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "900",
    letterSpacing: 2.1,
  },
  footerSlogan: {
    marginTop: 3,
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "900",
    letterSpacing: 1.6,
  },
  footerNote: {
    maxWidth: 360,
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 17,
  },
});
