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
  Pricing: {
    method: "GET",
    url: authEndpoints.PRICING,
  },
};
