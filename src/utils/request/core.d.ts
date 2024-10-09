import { RequestOptions } from './types';
export declare function request<T>(url: string, options?: RequestOptions): Promise<any>;
export declare namespace request {
    var initRequestConfig: typeof import("./default-config").initRequestConfig;
    var getInitializedConfig: typeof import("./default-config").getInitializedConfig;
    var getMessage: typeof import("./default-config").getMessage;
}
