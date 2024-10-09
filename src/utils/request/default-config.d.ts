import { DefaultConfig } from './types';
export declare function getMessage(data: any, defaultMessage: string): any;
export declare const requestStatus: {
    ready: boolean;
    queues: Function[];
};
declare const requestConfig: DefaultConfig;
export declare function initRequestConfig(options: Partial<DefaultConfig>): DefaultConfig;
export declare function getInitializedConfig(): DefaultConfig;
export { requestConfig };
