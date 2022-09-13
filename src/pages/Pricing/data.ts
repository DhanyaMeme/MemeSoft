export interface IPricing {
  planName: string;
  planDescription: string;
  planPricing: string;
  isRecommended: boolean;
}

export const PricingData: Array<IPricing> = [
  {
    planName: "Basic",
    planDescription: "Ideal for new eCommerce businesses",
    planPricing: "1499",
    isRecommended: false,
  },
  {
    planName: "Meme Soft",
    planDescription:
      "Ideal for expanding businesses with consistent online sales",
    planPricing: "5599",
    isRecommended: true,
  },
  {
    planName: "Advanced",
    planDescription: "Ideal for established businesses with high-volume sales",
    planPricing: "22680",
    isRecommended: false,
  },
];
