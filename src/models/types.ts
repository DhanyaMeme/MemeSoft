import { type } from "@testing-library/user-event/dist/type";
import { ReactNode } from "react";

type OnclickEvent = React.MouseEvent<HTMLButtonElement>;
type OnSubmitEvent = React.FormEvent<HTMLFormElement>;

type ChildrenType = {
  children: ReactNode;
};

export type { OnclickEvent, OnSubmitEvent, ChildrenType };
