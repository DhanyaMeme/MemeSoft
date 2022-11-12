export interface ISubMenu {
  title: string;
}

export interface INavData {
  id: number;
  title: string;
  dropDown?: ISubMenu[];
}

export const navData: INavData[] = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "BRAND",
  },
  {
    id: 3,
    title: "INDUSTRY",
  },
  {
    id: 4,
    title: "CONSULTANT",
  },
  {
    id: 8,
    title: "CASE STUDY",
    dropDown: [
      {
        title: "Beanie and scarf ",
      },
      {
        title: "Sweater",
      },
      {
        title: "Inflatable paddle board",
      },
      {
        title: "Skateboard",
      },
      {
        title: "Leather bags",
      },
      {
        title: "Window and doors",
      },
      {
        title: "Underwear",
      },
    ],
  },
  {
    id: 9,
    title: "Contact",
  },
];
