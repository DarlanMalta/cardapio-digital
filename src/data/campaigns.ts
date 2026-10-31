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
  productId: 7,
  badge: "Destaque da casa",
  description: "Bacon, cheddar, cebola caramelizada e molho Guedes.",
  ctaLabel: "Conhecer o Na Brasa",
  active: true,
};
