import { useRef } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { categories, products, type CategoryId } from "./data/products";

type CategoryPositions = Partial<Record<CategoryId, number>>;

export default function Index() {
  const menuScrollRef = useRef<ScrollView>(null);
  const menuListPosition = useRef(0);
  const categoryNavigationHeight = useRef(0);
  const categoryPositions = useRef<CategoryPositions>({});

  const scrollToCategory = (categoryId: CategoryId) => {
    const categoryPosition = categoryPositions.current[categoryId];

    if (categoryPosition === undefined) {
      return;
    }

    const scrollPosition =
      menuListPosition.current +
      categoryPosition -
      categoryNavigationHeight.current;

    menuScrollRef.current?.scrollTo({
      y: Math.max(0, scrollPosition),
      animated: true,
    });
  };

  return (
    <ScrollView
      ref={menuScrollRef}
      style={styles.container}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.header}>
        <Text style={styles.text}>
          Conheça nossas Deliciosas opções de lanches e acompanhamentos!
        </Text>
      </View>

      <View
        style={styles.categoryNavigation}
        onLayout={(event) => {
          categoryNavigationHeight.current = event.nativeEvent.layout.height;
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryNavigationContent}
        >
          {categories.map((category) => (
            <Pressable
              key={category.id}
              onPress={() => scrollToCategory(category.id)}
              accessibilityRole="button"
              accessibilityLabel={`Ir para ${category.label}`}
              style={({ pressed }) => [
                styles.categoryChip,
                pressed && styles.categoryChipPressed,
              ]}
            >
              <Text style={styles.categoryChipText}>{category.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View
        style={styles.menuList}
        onLayout={(event) => {
          menuListPosition.current = event.nativeEvent.layout.y;
        }}
      >
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id,
          );

          return (
            <View
              key={category.id}
              style={styles.categorySection}
              onLayout={(event) => {
                categoryPositions.current[category.id] =
                  event.nativeEvent.layout.y;
              }}
            >
              <Text style={styles.categoryTitle}>{category.label}</Text>

              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pageContent: {
    width: "100%",
  },

  header: {
    alignItems: "center",
    paddingTop: 40,
  },

  categoryNavigation: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    zIndex: 1,
  },

  categoryNavigationContent: {
    paddingHorizontal: 15,
    gap: 10,
  },

  categoryChip: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  categoryChipPressed: {
    opacity: 0.6,
  },

  categoryChipText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444444",
  },

  menuList: {
    width: "100%",
    paddingTop: 24,
    paddingHorizontal: 15,
    paddingBottom: 24,
  },

  categorySection: {
    width: "100%",
    marginBottom: 24,
  },

  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#444444",
    marginBottom: 12,
  },

  text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 25,
    color: "#444444",
    textAlign: "center",
  },
});
