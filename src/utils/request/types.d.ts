import { IncomingMessage } from 'http';
export type RequestOptions = {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
    data?: string | {
        [key: string]: any;
    };
    quiet?: boolean;
    isGlobal?: boolean;
    dataType?: 'json' | 'text';
    ctx?: Ctx;
    timeout?: number;
    abortRef?: (abort: () => void) => void;
    responseType?: 'json' | 'text' | 'blob';
} & {
    [key: string]: any;
};
export type RequestOptionsWithUrl = {
    url: string;
} & RequestOptions;
export type Ctx = {
    req?: IncomingMessage & {
        redirectUrl?: string;
    };
    path: string;
    whiteList: string[];
    redirectUrl?: string;
    selfUrl?: string;
};
export type DefaultConfig = {
    headers: HeadersInit;
    autoWechatCookie?: boolean;
    options: RequestOptions;
    timeout?: number;
    isUnauthorized: (response: Response, options: RequestOptionsWithUrl) => Promise<boolean>;
    beforeSend: (url: string, requestInit: RequestOptions, options: RequestOptions) => Promise<{
        url: string;
        options: RequestOptions;
    }>;
    onReceive: (data: any, response: Response & {
        cookies?: string[];
    }, options: RequestOptionsWithUrl) => Promise<any>;
    convertData: (data: any, response: Response, options: RequestOptionsWithUrl) => Promise<any>;
    onError?: (e: Error, response: (Response & {
        cookies?: string[];
    }) | AbortSignal, options: RequestOptionsWithUrl) => Promise<any>;
    onUnauthorized: (data: any, response: Response, options: RequestOptionsWithUrl) => Promise<any>;
};
