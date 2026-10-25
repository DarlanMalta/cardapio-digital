export type CampaignType = {
  id: string;
  productId: number;
  badge: string;
  eyebrow: string;
  title: string;
  ctaLabel: string;
  active: boolean;
};

export const featuredCampaign: CampaignType = {
  id: "signature-na-brasa",
  productId: 4,
  badge: "Escolha da casa",
  eyebrow: "Se é a primeira vez",
  title: "Comece pelo Cuiudu triplo.",
  ctaLabel: "Ver detalhes",
  active: true,
};
