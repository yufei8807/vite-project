import { RequestOptions } from "./types";
export declare function request<T>(url: string, options?: RequestOptions): Promise<any>;
export declare namespace request {
  let initRequestConfig: typeof import("./default-config").initRequestConfig;
  let getInitializedConfig: typeof import("./default-config").getInitializedConfig;
  let getMessage: typeof import("./default-config").getMessage;
}
