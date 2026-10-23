import type { ImageSourcePropType } from "react-native";

import burgerImage from "../../assets/images/Xburguer.png";

export type CampaignType = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  imageAlt: string;
  active: boolean;
};

export const featuredCampaign: CampaignType = {
  id: "weekly-feature-preview",
  eyebrow: "Espaço para novidades",
  title: "Toda semana pode ter um motivo novo para voltar.",
  description:
    "Área demonstrativa preparada para combos, lançamentos e campanhas especiais.",
  image: burgerImage,
  imageAlt: "Prévia de um hambúrguer em destaque",
  active: true,
};
