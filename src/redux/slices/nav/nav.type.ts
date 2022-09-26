import { AsyncData } from "../../../models/types";

export interface ICustomer {
  city: string;
  companyname: string;
  companyregistartion: string;
  country: string;
  currency: string;
  customerid: 0;
  email: string;
  gstregistarion: string;
  mobile: string;
  otp: string;
  parentcompany: string;
  password: string;
  phone: string;
  planename: string;
  platform: string;
  sid: number;
  state: string;
  status: boolean;
  street1: string;
  street2: string;
  website: string;
  zip: string;
}

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
  customer: AsyncData<ICustomer>;
  pricing: string | undefined;
  pricingData: AsyncData<Pricing>;
  selectedPricing: IPricingData | undefined;
}
