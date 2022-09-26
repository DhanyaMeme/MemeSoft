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

export interface ICustomerTransaction {
  fee: string;
  sid: number;
  tid: string;
  country: string;
  customerid: string;
  paymentmode: string;
  paymentstatus: string;
  plancode: string;
  planename: string;
  platform: string;
  status: string;
  tnxid: string;
}

export interface ICustomerState {
  customer: AsyncData<ICustomer>;
  customerTransactions: AsyncData<Array<ICustomerTransaction>>;
}
