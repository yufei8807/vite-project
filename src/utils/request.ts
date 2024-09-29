import axios from "axios";
import { hideGlobalLoading, showGlobalLoading } from "@/components/GlobalLoading";
import { message } from "@/utils/antdGlobal";

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 8000,
  withCredentials: true,
});

instance.interceptors.request.use(
  config => {
    showGlobalLoading();
    return config;
  },
  error => {
    console.log("error", error);
    hideGlobalLoading();
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    message.success("请求成功");
    setTimeout(() => {
      hideGlobalLoading();
    }, 500);
    return res;
  },
  error => {
    message.error("请求失败，请重试" + error);
    hideGlobalLoading();
    Promise.reject(error);
  },
);

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params);
  },
};
