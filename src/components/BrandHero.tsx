import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import burgerImage from "../../assets/images/Xburguer.png";
import { colors, layout } from "../theme";

export default function BrandHero() {
  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <View style={styles.heroCopy}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <MaterialCommunityIcons
                name="fire"
                size={25}
                color={colors.white}
              />
            </View>

            <View>
              <Text style={styles.brandName}>NA BRASA</Text>
              <Text style={styles.brandDescriptor}>HAMBURGUERIA</Text>
            </View>
          </View>

          <Text style={styles.eyebrow}>DIRETO DA BRASA PARA A CITY</Text>
          <Text style={styles.title}>
            O 01 DA{`\n`}
            <Text style={styles.titleAccent}>CITY.</Text>
          </Text>
          <Text style={styles.description}>
            Explore os sabores da Na Brasa em um cardápio direto, visual e
            feito para abrir o apetite.
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={18}
                color={colors.accentStrong}
              />
              <Text style={styles.metaText}>Condeúba • BA</Text>
            </View>

            <View style={styles.metaDivider} />

            <View style={styles.metaItem}>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={17}
                color={colors.accentStrong}
              />
              <Text style={styles.metaText}>Cardápio digital</Text>
            </View>
          </View>
        </View>

        <View style={styles.heroVisual} pointerEvents="none">
          <View style={styles.glow} />
          <Text style={styles.heroNumber}>01</Text>
          <Image
            source={burgerImage}
            style={styles.heroImage}
            resizeMode="contain"
            accessible
            accessibilityLabel="Hambúrguer artesanal da Na Brasa"
          />
          <View style={styles.heroTag}>
            <View style={styles.heroTagDot} />
            <Text style={styles.heroTagText}>SABOR DE RESPEITO</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  heroContent: {
    minHeight: 520,
    width: "100%",
    maxWidth: layout.contentMaxWidth,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 64,
    paddingBottom: 54,
    paddingHorizontal: 20,
    columnGap: 52,
    rowGap: 28,
  },
  heroCopy: {
    minWidth: 280,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 460,
    zIndex: 2,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandMark: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
    borderWidth: 1,
    borderColor: colors.accentStrong,
  },
  brandName: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "900",
    letterSpacing: 2.4,
  },
  brandDescriptor: {
    marginTop: 3,
    color: colors.textMuted,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "700",
    letterSpacing: 3.2,
  },
  eyebrow: {
    marginTop: 38,
    color: colors.accentStrong,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "800",
    letterSpacing: 2.1,
  },
  title: {
    marginTop: 10,
    color: colors.text,
    fontSize: 60,
    lineHeight: 59,
    fontWeight: "900",
    letterSpacing: -2.4,
  },
  titleAccent: {
    color: colors.accentStrong,
  },
  description: {
    maxWidth: 520,
    marginTop: 20,
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 25,
  },
  metaRow: {
    marginTop: 26,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  metaText: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
  },
  metaDivider: {
    width: 1,
    height: 18,
    backgroundColor: colors.border,
  },
  heroVisual: {
    minWidth: 280,
    maxWidth: 430,
    height: 320,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 320,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  glow: {
    position: "absolute",
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.borderWarm,
  },
  heroNumber: {
    position: "absolute",
    top: -35,
    right: 2,
    color: "rgba(255, 255, 255, 0.035)",
    fontSize: 176,
    lineHeight: 190,
    fontWeight: "900",
    letterSpacing: -12,
  },
  heroImage: {
    width: "100%",
    maxWidth: 430,
    height: 290,
    zIndex: 2,
  },
  heroTag: {
    position: "absolute",
    right: 2,
    bottom: 8,
    zIndex: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 999,
    backgroundColor: colors.surfaceRaised,
    borderWidth: 1,
    borderColor: colors.border,
  },
  heroTagDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.accentStrong,
  },
  heroTagText: {
    color: colors.text,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "800",
    letterSpacing: 1.3,
  },
});
