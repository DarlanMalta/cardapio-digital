export type CampaignType = {
  id: string;
  productId: number;
  badge: string;
  description: string;
  ctaLabel: string;
  active: boolean;
};

export const featuredCampaign: CampaignType = {
  id: "signature-na-brasa",
  productId: 8,
  badge: "Destaque da casa",
  description:
    "Pão de brioche, burguer de 150 gramas, queijo muçarela, cream cheese, abacaxi caramelizado e molho Guedes.",
  ctaLabel: "Conhecer o Na Brasa",
  active: true,
};
