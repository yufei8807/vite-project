import { stringify } from "qs";
import { getInitializedConfig, getMessage, initRequestConfig, requestConfig, requestStatus } from "./default-config";
import fetch from "./fetch";
async function getResponseData(response, options) {
  var _a, _b;
  const contentType = response.headers.get("content-type");
  const responseType =
    (_a = options == null ? void 0 : options.responseType) != null
      ? _a
      : contentType != null && contentType.split(";")[0] === "application/json"
        ? "json"
        : "text";
  try {
    const result = await ((_b = response[responseType]) == null ? void 0 : _b.call(response));
    return result;
  } catch (e) {
    const text = await response.text();
    console.error(`The response is not ${responseType}`);
    return text;
  }
}
async function request(url, options = {}) {
  // debugger;
  // if (!requestStatus.ready) {
  //   await new Promise(resolve => {
  //     requestStatus.queues.push(resolve);
  //   });
  // }
  const { headers: requestHeaders, abortRef, data: requestData, ...others } = options || {};
  const method = (options.method || "GET").toUpperCase();
  const headers = { ...requestConfig.headers, ...requestHeaders };
  const requestOption = {
    headers,
    ...requestConfig.options,
    ...others,
  };
  let requestUrl = url;
  if (requestData) {
    if (typeof requestData === "string") {
      if (method === "GET") {
        requestUrl = `${url}${url.includes("?") ? "&" : "?"}${requestData}`;
      } else {
        requestOption.body = requestData;
      }
    } else {
      if (method === "GET") {
        requestUrl = `${requestUrl}${url.includes("?") ? "&" : "?"}${stringify(requestData)}`;
      } else {
        headers["Content-Type"] = "application/json; charset=UTF-8";
        requestOption.body = JSON.stringify(requestData);
      }
    }
  }
  const newRequestConfig = await requestConfig.beforeSend(requestUrl, requestOption, options);
  if (newRequestConfig.url) {
    requestUrl = newRequestConfig.url;
  }
  Object.assign(requestOption, newRequestConfig.options);
  if (requestOption.data) {
    if (typeof requestOption.data === "string") {
      if (method === "GET") {
        requestUrl = `${url}${url.includes("?") ? "&" : "?"}${requestData}`;
      } else {
        requestOption.body = requestOption.data;
      }
    } else {
      if (method === "GET") {
        requestUrl = `${requestUrl}${url.includes("?") ? "&" : "?"}${stringify(requestOption.data)}`;
      } else {
        headers["Content-Type"] = "application/json; charset=UTF-8";
        requestOption.body = JSON.stringify(requestOption.data);
      }
    }
  }
  const requestOptions = { url: requestUrl, ...options };
  let response = null;
  let timeoutId = null;
  try {
    const timeout = requestOption.timeout || requestConfig.timeout;
    if (abortRef) {
      const abortController = new AbortController();
      abortRef(() => abortController.abort());
      requestOption.signal = abortController.signal;
    }
    const queens = [
      (async () => {
        response = await fetch(requestUrl, requestOption);
        const responseData = await getResponseData(response, requestOptions);
        if (await requestConfig.isUnauthorized(response, requestOptions)) {
          await requestConfig.onUnauthorized(responseData, response, requestOptions);
        }
        await requestConfig.onReceive(responseData, response, requestOptions);
        return await requestConfig.convertData(responseData, response, requestOptions);
      })(),
    ];
    if (timeout) {
      const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          reject(new Error("request timeout"));
        }, timeout);
      });
      queens.push(timeoutPromise);
    }
    return await Promise.race(queens).finally(() => timeoutId && clearTimeout(timeoutId));
  } catch (e) {
    if (requestConfig.onError) {
      await requestConfig.onError(e, response ? response : requestOption.signal || {}, requestOptions);
    }
    timeoutId && clearTimeout(timeoutId);
  }
}
request.initRequestConfig = initRequestConfig;
request.getInitializedConfig = getInitializedConfig;
request.getMessage = getMessage;
export { request };
