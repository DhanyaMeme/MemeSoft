import { AsyncData } from "../../../models/types";

export interface IPricingData {
  country: string;
  fee: string;
  plancode: string;
  planename: string;
  platform: string;
  sid: number;
}

export type Pricing = Map<string, IPricingData[]>;

export interface INavState {
  pricing: string | undefined;
  pricingData: AsyncData<Pricing>;
  selectedPricing: IPricingData | undefined;
}
