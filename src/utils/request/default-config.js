function getMessage(data, defaultMessage) {
  if (!data) {
    return defaultMessage;
  }
  return typeof data === "string" ? data : data.error || data.msg || data.message;
}
const requestStatus = { ready: false, queues: [] };
const requestConfig = {
  headers: {
    pragma: "no-cache",
    "cache-control": "no-cache",
    Accept: "application/json",
    "x-requested-with": "XMLHttpRequest"
  },
  options: {
    method: "GET",
    cache: "no-cache",
    credentials: "include"
  },
  beforeSend: async (url, options) => {
    return { url, options };
  },
  isUnauthorized: async (response) => response.status === 401,
  onReceive: async (data, response) => {
    const { status } = response;
    if (status < 200 || status >= 300) {
      throw new Error(getMessage(data, "\u8BF7\u6C42\u54CD\u5E94\u5F02\u5E38"));
    }
  },
  convertData: async (data) => data,
  onUnauthorized: async (data) => {
    throw new Error(getMessage(data, "\u6682\u65E0\u6388\u6743\uFF0C\u8BF7\u767B\u5F55\u91CD\u8BD5"));
  }
};
function initRequestConfig(options) {
  Object.assign(requestConfig, {
    ...options,
    headers: { ...requestConfig.headers, ...options.headers },
    options: { ...requestConfig.options, ...options.options }
  });
  requestStatus.ready = true;
  requestStatus.queues.forEach((queue) => {
    queue();
  });
  requestStatus.queues = [];
  return requestConfig;
}
function getInitializedConfig() {
  return requestConfig;
}
export {
  getInitializedConfig,
  getMessage,
  initRequestConfig,
  requestConfig,
  requestStatus
};
