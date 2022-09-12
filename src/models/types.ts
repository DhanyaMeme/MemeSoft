import { type } from "@testing-library/user-event/dist/type";
import { ReactNode } from "react";

type OnclickEvent = React.MouseEvent<HTMLButtonElement>;
type OnSubmitEvent = React.FormEvent<HTMLFormElement>;

type ChildrenType = {
  children: ReactNode;
};

interface IBanner {
  title: string;
  subTitle: string;
  images: string[];
}

interface IFeature {
  title: string;
  description: string;
  // icons: string;
}

interface IInfoProps {
  banner: IBanner;
  feature: Array<IFeature>;
}

export type { OnclickEvent, OnSubmitEvent, ChildrenType };
