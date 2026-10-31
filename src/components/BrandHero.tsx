import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import backgroundImage from "../../assets/images/BackGround.png";
import burgerImage from "../../assets/images/Xburguer.png";
import {
  breakpoints,
  colors,
  layout,
  radius,
  spacing,
  typography,
} from "../theme";
type Props = {
  onExplore: () => void;
};

export default function BrandHero({ onExplore }: Props) {
  const { width } = useWindowDimensions();
  const isMobile = width < breakpoints.mobile;
  const isNarrow = width <= breakpoints.narrow;
  //TELA INICIAL MENU
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.hero}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={[styles.content, isNarrow && styles.contentNarrow]}>
        <View style={[styles.topbar, isNarrow && styles.topbarNarrow]}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <MaterialCommunityIcons
                name="hamburger"
                size={24}
                color={colors.white}
                style={styles.brandIcon}
              />
            </View>

            <View>
              <Text style={styles.brandName}>NA BRASA</Text>
              <Text style={styles.brandDescriptor}>HAMBURGUERIA</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.main,
            isMobile && styles.mainMobile,
            isNarrow && styles.mainNarrow,
          ]}
        >
          <View style={[styles.copy, isMobile && styles.copyMobile]}>
            <View style={styles.eyebrowRow}>
              <View style={styles.eyebrowLine} />
              <Text style={styles.eyebrow}>SÓ PROCEDIMENTO</Text>
            </View>

            <Text style={[styles.title, isMobile && styles.titleMobile]}>
              O 01 DA{`\n`}
              <Text style={styles.titleAccent}>CITY.</Text>
            </Text>
            <Pressable
              onPress={onExplore}
              accessibilityRole="button"
              accessibilityLabel="Ir para o cardápio"
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>VER O CARDÁPIO</Text>
              <MaterialCommunityIcons
                name="arrow-down"
                size={18}
                color={colors.white}
              />
            </Pressable>
          </View>

          <View style={[styles.visual, isMobile && styles.visualMobile]}>
            <View style={styles.orbitOuter} />
            <View style={styles.orbitInner} />
            <Text style={[styles.number, isMobile && styles.numberMobile]}>
              01
            </Text>
            <Image
              source={burgerImage}
              style={[styles.burger, isMobile && styles.burgerMobile]}
              resizeMode="contain"
              accessible
              accessibilityLabel="Burguer artesanal da Na Brasa"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    minHeight: 690,
    overflow: "hidden",
    backgroundColor: colors.ink,
  },
  brandIcon: {
    // Compensa a rotação de -6 graus aplicada ao círculo.
    transform: [{ rotate: "6deg" }],
  },

  backgroundImage: {
    opacity: 0.56,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(6, 5, 4, 0.56)",
  },
  content: {
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    minHeight: 690,
    alignSelf: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: layout.horizontalPadding,
  },
  contentNarrow: {
    paddingHorizontal: spacing.md,
  },
  topbar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  topbarNarrow: {
    flexDirection: "column",
    justifyContent: "center",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  brandMark: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ember,
    borderWidth: 2,
    borderColor: colors.emberStrong,
    transform: [{ rotate: "-6deg" }],
  },
  brandName: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "900",
    letterSpacing: 2.4,
  },
  brandDescriptor: {
    marginTop: 2,
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 9,
    lineHeight: 11,
    fontWeight: "800",
    letterSpacing: 3.1,
  },
  main: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 28,
    paddingVertical: 38,
  },
  mainMobile: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 66,
    paddingBottom: 24,
  },
  mainNarrow: {
    paddingTop: 46,
  },
  copy: {
    maxWidth: 580,
    flex: 1,
    alignItems: "flex-start",
    zIndex: 3,
  },
  copyMobile: {
    width: "100%",
    alignItems: "center",
  },
  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  eyebrowLine: {
    width: 32,
    height: 3,
    backgroundColor: colors.ember,
  },
  eyebrow: {
    color: colors.emberStrong,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "900",
    letterSpacing: 2,
  },
  title: {
    marginTop: 16,
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 84,
    lineHeight: 78,
    fontWeight: "900",
    letterSpacing: -5,
  },
  titleMobile: {
    fontSize: 58,
    lineHeight: 55,
    letterSpacing: -3.5,
    textAlign: "center",
  },
  titleAccent: {
    color: colors.ember,
  },
  button: {
    minHeight: 50,
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: radius.pill,
    backgroundColor: colors.ember,
    borderWidth: 1,
    borderColor: colors.emberStrong,
  },
  buttonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: colors.white,
    fontFamily: typography.body,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "900",
    letterSpacing: 1.5,
  },
  visual: {
    minWidth: 360,
    maxWidth: 520,
    height: 410,
    flex: 0.95,
    alignItems: "center",
    justifyContent: "center",
  },
  visualMobile: {
    minWidth: 0,
    width: "100%",
    height: 310,
    flex: 0,
  },
  orbitOuter: {
    position: "absolute",
    width: 355,
    height: 355,
    borderRadius: 178,
    borderWidth: 1,
    borderColor: "rgba(255, 106, 36, 0.22)",
  },
  orbitInner: {
    position: "absolute",
    width: 276,
    height: 276,
    borderRadius: 138,
    backgroundColor: "rgba(255, 75, 31, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 106, 36, 0.26)",
  },
  number: {
    position: "absolute",
    top: -4,
    right: -10,
    color: "rgba(255, 255, 255, 0.055)",
    fontFamily: typography.display,
    fontSize: 205,
    lineHeight: 215,
    fontWeight: "900",
    letterSpacing: -17,
  },
  numberMobile: {
    top: -18,
    right: 6,
    fontSize: 142,
    lineHeight: 152,
  },
  burger: {
    width: "110%",
    height: 370,
    zIndex: 2,
  },
  burgerMobile: {
    width: "100%",
    height: 280,
  },
});
