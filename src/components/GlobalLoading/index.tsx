import { Spin } from "antd";
import { createRoot } from "react-dom/client";

let count = 0;
export const showGlobalLoading = () => {
  if (count++ > 0) return;
  const loadingElement = document.createElement("div");
  loadingElement.setAttribute("id", "global-loading");
  document.body.appendChild(loadingElement);
  createRoot(loadingElement).render(<Spin fullscreen />);
};

export const hideGlobalLoading = () => {
  if (--count > 0) return;
  const loadingEle = document.getElementById("global-loading");
  if (!loadingEle) return;
  document.body.removeChild(loadingEle as HTMLElement);
};
