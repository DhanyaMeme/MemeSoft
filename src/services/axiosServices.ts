import { authEndpoints } from "./axiosEndpoints";

export const authService = {
  Register: {
    method: "POST",
    url: authEndpoints.REGISTER,
  },
  Login: {
    method: "POST",
    url: authEndpoints.LOGIN,
  },
  EmailVerify: {
    method: "POST",
    url: authEndpoints.EMAIL_VERIFY,
  },
  ConfirmOtp: {
    method: "POST",
    url: authEndpoints.CONFIRM__OTP,
  },
  ResetPassword: {
    method: "POST",
    url: authEndpoints.RESET_PASSWORD,
  },
  GetCustomer: {
    method: "GET",
    url: authEndpoints.GET_CUSTOMER,
  },
  GetCustomertTrascations: {
    method: "GET",
    url: authEndpoints.CUSTOMER_TRANSACTIONS,
  },
  AddContact: {
    method: "POST",
    url: authEndpoints.ADD_CONTACT,
  },
  AddNewsletter: {
    method: "POST",
    url: authEndpoints.ADD_NEWSLETTER,
  },
};

export const paymentService = {
  getAllSubcription: {
    method: "GET",
    url: authEndpoints.SUBSCRIPTION_PLANS,
  },
  stripePay: {
    method: "POST",
    url: authEndpoints.STRIPE,
  },
  updateTransaction: {
    method: "POST",
    url: authEndpoints.TRANSACTION,
  },
};
