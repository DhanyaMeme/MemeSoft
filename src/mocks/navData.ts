export interface ISubMenu {
  title: string;
  path: string;
}

export interface INavData {
  id: number;
  title: string;
  path: string;
  dropDown?: ISubMenu[];
}

export const navData: INavData[] = [
  {
    id: 1,
    title: "Home",
    path: "home",
  },
  {
    id: 2,
    title: "Ecommerce",
    path: "ecommerce",
  },
  {
    id: 3,
    title: "Mobile Apps",
    path: "mobile-apps",
  },
  {
    id: 4,
    title: "ERP",
    path: "erp",
  },
  {
    id: 5,
    title: "POS",
    path: "pos",
  },
  {
    id: 6,
    title: "Solution",
    path: "solution",
  },
  {
    id: 7,
    title: "Security",
    path: "security",
  },
  {
    id: 8,
    title: "Pricing",
    path: "pricing",
    dropDown: [
      {
        title: "POS",
        path: "pricing/pos",
      },
      {
        title: "ERP",
        path: "pricing/erp",
      },
      {
        title: "Ecommerce",
        path: "pricing/ecommerce",
      },
      {
        title: "POS",
        path: "pricing/pos",
      },
    ],
  },
  {
    id: 9,
    title: "Contact",
    path: "contact",
  },
];
