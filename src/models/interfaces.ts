export interface IBanner {
  title: string;
  subTitle: string;
  images: string[];
}

export interface IFeature {
  title: string;
  description: string;
  // icons: string;
}

export interface IInfoProps {
  banner: IBanner;
  feature: Array<IFeature>;
}

export interface IPillar {
  name: string;
  url: string;
  features: string[];
  // icons: string;
}

export interface IFeatureProps {
  title: string;
  subTitle: string;
  pillars: IPillar[];
}
