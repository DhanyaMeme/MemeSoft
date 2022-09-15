import { authEndpoints } from "./axiosEndpoints";

export const authService = {
  Register: {
    method: "POST",
    url: authEndpoints.REGISTER,
  },
  Pricing: {
    method: "GET",
    url: authEndpoints.PRICING,
  },
};
