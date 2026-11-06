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
  productId: 3,
  badge: "Destaque da casa",
  description:
    "Pão brioche, burguer 145 gramas, cream cheese, bacon, cebola caramelizada e molho Guedes.",

  ctaLabel: "Conhecer o Cheese",
  active: true,
};
