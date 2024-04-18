import axios from "axios";
import { debugLog } from "./Logger";
import { constantsKey } from "./constantKey";
const TAG = "NetworkOps: ";

const authRoutes = [];

const API_TIMEOUT = 18000;
axios.interceptors.request.use(
  (config) => {
    let newConfig = config;
    const accessToken = localStorage.getString(constantsKey.ACCESS_TOKEN);
    try {
      const isTokenRequired = authRoutes.includes(config.url);
      if (isTokenRequired) {
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            Authorization: `Bearer ${accessToken}`,
            // "auth-id": userId,
          },
          timeout: API_TIMEOUT,
        };
      } else {
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
          },
          timeout: API_TIMEOUT,
        };
      }
    } catch (e) {
      debugLog(TAG, "Error in interceptor request", e);
    }
    return newConfig;
  },
  (error) => {
    debugLog(TAG, "Error in interceptor request", error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  async (res) => {
    try {
      // const { data } = res;
      // const { status, message, errorCode } = data;
      // if (!status) {
      //   debugLog(TAG, `${errorCode} - ${message} - ${res.config?.url}`);
      // }
      return res.data;
    } catch (e) {
      debugLog(TAG, e);
    }
    return {
      success: false,
      message: "NetworkOps: Something went wrong intercepting response",
    };
  },
  (error) => {
    debugLog(TAG, error.message);
    return Promise.reject(error);
  }
);
export const makeGetRequest = (URL) =>
  axios
    .get(URL);
    // .then((response) => {
    //   return response;
    // })
    // .catch((err) => debugLog("Hello", err));
export const makeGetRequestWithData = (URL, data) =>
  axios
    .get(URL, { params: data })
    .then((response) => {
      return response;
    })
    .catch((err) => debugLog(TAG, err));

export const makePostRequest = (URL, data = {}) => axios.post(URL, data);

export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data });

export const makePatchRequest = (URL, data = {}) =>
  axios.patch(URL, { ...data });

export const makeDeleteRequest = (URL, data = {}) =>
  axios.delete(URL, { data: data });
