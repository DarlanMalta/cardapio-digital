//exibe os detalhes ampliados do produto selecionado. Também oferece fechar, avançar e voltar entre produtos.

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import type { ProductType } from "../../data/products";
import { colors, radius, spacing, typography } from "../../theme";
import { formatPrice } from "../../utils/formatPrice";
import IngredientChip from "./IngredientChip";

type Props = {
  product: ProductType | null;
  visible: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ProductDetailsModal({
  product,
  visible,
  onClose,
  onPrevious,
  onNext,
}: Props) {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 760;
  const isNarrow = width <= 360;

  if (!product) {
    return null;
  }

  const useCoverImage = !["burger", "combos"].includes(product.category);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View
        style={[styles.overlay, isMobile && styles.overlayMobile]}
        accessibilityViewIsModal
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Fechar detalhes do produto"
        />

        <View
          style={[
            styles.dialog,
            isMobile && styles.dialogMobile,
            { maxHeight: isMobile ? height * 0.92 : height * 0.88 },
          ]}
        >
          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Fechar"
            style={({ pressed }) => [
              styles.closeButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <MaterialCommunityIcons
              name="close"
              size={22}
              color={colors.textOnPaper}
            />
          </Pressable>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.content,
              isMobile && styles.contentMobile,
            ]}
          >
            <View style={[styles.visual, isMobile && styles.visualMobile]}>
              <Text style={styles.visualNumber}>01</Text>
              <Image
                source={product.image}
                style={styles.image}
                resizeMode={useCoverImage ? "cover" : "contain"}
                accessible
                accessibilityLabel={product.imageAlt}
              />
            </View>

            <View style={[styles.info, isNarrow && styles.infoNarrow]}>
              <Text style={styles.eyebrow}>ESCOLHA DA VEZ</Text>
              <Text
                style={[
                  styles.name,
                  isMobile && styles.nameMobile,
                  isNarrow && styles.nameNarrow,
                ]}
              >
                {product.name}
              </Text>
              <Text style={styles.price}>{formatPrice(product.price)}</Text>
              <Text style={styles.description}>{product.description}</Text>

              <Text style={styles.ingredientsLabel}>VEM COM</Text>
              <View style={styles.ingredients}>
                {product.ingredients.map((ingredient) => (
                  <IngredientChip key={ingredient} label={ingredient} />
                ))}
              </View>

              <View style={styles.navigation}>
                <Pressable
                  onPress={onPrevious}
                  accessibilityRole="button"
                  accessibilityLabel="Produto anterior"
                  style={({ pressed }) => [
                    styles.navigationButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={18}
                    color={colors.textOnPaper}
                  />
                  <Text style={styles.navigationText}>ANTERIOR</Text>
                </Pressable>

                <Pressable
                  onPress={onNext}
                  accessibilityRole="button"
                  accessibilityLabel="Próximo produto"
                  style={({ pressed }) => [
                    styles.navigationButton,
                    styles.navigationButtonPrimary,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Text style={styles.navigationTextPrimary}>PRÓXIMO</Text>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={18}
                    color={colors.white}
                  />
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
    backgroundColor: "rgba(0, 0, 0, 0.78)",
  },
  overlayMobile: {
    justifyContent: "flex-end",
    padding: 0,
  },
  dialog: {
    width: "100%",
    maxWidth: 980,
    overflow: "hidden",
    borderRadius: radius.lg,
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.borderPaper,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.38,
    shadowRadius: 38,
    elevation: 15,
  },
  dialogMobile: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  closeButton: {
    position: "absolute",
    top: 14,
    right: 14,
    zIndex: 8,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: colors.paperStrong,
    borderWidth: 1,
    borderColor: colors.borderPaper,
  },
  buttonPressed: {
    opacity: 0.68,
  },
  content: {
    flexDirection: "row",
  },
  contentMobile: {
    flexDirection: "column",
  },
  visual: {
    minWidth: 360,
    minHeight: 520,
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.paperMuted,
  },
  visualMobile: {
    minWidth: 0,
    width: "100%",
    minHeight: 290,
    height: 290,
    flex: 0,
  },
  visualNumber: {
    position: "absolute",
    left: -14,
    bottom: -43,
    color: "rgba(26, 21, 17, 0.07)",
    fontFamily: typography.display,
    fontSize: 200,
    lineHeight: 210,
    fontWeight: "900",
    letterSpacing: -16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    minWidth: 320,
    flex: 0.9,
    justifyContent: "center",
    padding: spacing.xl,
  },
  infoNarrow: {
    minWidth: 0,
    padding: spacing.lg,
  },
  eyebrow: {
    color: colors.emberDark,
    fontFamily: typography.body,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
  },
  name: {
    marginTop: 11,
    color: colors.textOnPaper,
    fontFamily: typography.display,
    fontSize: 42,
    lineHeight: 45,
    fontWeight: "900",
    letterSpacing: -1.8,
    textTransform: "uppercase",
  },
  nameMobile: {
    fontSize: 31,
    lineHeight: 35,
  },
  nameNarrow: {
    fontSize: 28,
    lineHeight: 32,
  },
  price: {
    marginTop: 14,
    color: colors.ember,
    fontFamily: typography.display,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "900",
    letterSpacing: -0.8,
  },
  description: {
    marginTop: 18,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  ingredientsLabel: {
    marginTop: 27,
    color: colors.textOnPaper,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "900",
    letterSpacing: 1.6,
  },
  ingredients: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  disclaimer: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  disclaimerText: {
    flex: 1,
    color: colors.textOnPaperMuted,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 16,
  },
  navigation: {
    marginTop: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  navigationButton: {
    minHeight: 44,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.borderPaper,
  },
  navigationButtonPrimary: {
    backgroundColor: colors.ember,
    borderColor: colors.emberStrong,
  },
  navigationText: {
    color: colors.textOnPaper,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "900",
    letterSpacing: 1.1,
  },
  navigationTextPrimary: {
    color: colors.white,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "900",
    letterSpacing: 1.1,
  },
});
