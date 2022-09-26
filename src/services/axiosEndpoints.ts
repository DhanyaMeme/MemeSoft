export const authEndpoints = Object.freeze({
  REGISTER: "/add/customer",
  LOGIN: "/customer/login",
  EMAIL_VERIFY: "/customer/forget/password",
  CONFIRM__OTP: "/customer/confirm/otp/verification",
  RESET_PASSWORD: "/customer/reset/password",
  GET_CUSTOMER: "/get/customer/email",

  ADD_NEWSLETTER: "/newsletter/add/email",
  ADD_CONTACT: "/Contact/add/contact",

  // Plans
  SUBSCRIPTION_PLANS: "/get/all/subcription",
  STRIPE: "/stripe/pay",
  TRANSACTION: "/add/transaction",
});
