export interface IFooterLinks {
  title: string;
  items: {
    head: string;
    url: string;
  }[];
}

export const footerLinks: IFooterLinks[] = [
  {
    title: "INFORMATION",
    items: [
      {
        head: "About Us",
        url: "about",
      },
      {
        head: "Contact",
        url: "contact",
      },
      {
        head: "Shipping Policy",
        url: "shipping-policy",
      },
      {
        head: "Return and Refund Policy",
        url: "refund-policy",
      },
      {
        head: "Cancellation Policy",
        url: "cancellation-policy",
      },
    ],
  },
  {
    title: "INVESTORS",
    items: [
      {
        head: "Reach Us",
        url: "reach-us",
      },
    ],
  },
];