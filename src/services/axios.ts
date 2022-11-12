import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_MEMESOFT_BASEURL;

axios.defaults.headers.common = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export function fetchData(params: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axios
      .request(params)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  });
}
