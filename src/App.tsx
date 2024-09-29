import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { App as AntdApp, ConfigProvider } from "antd";
import AntdGlobal from "./utils/antdGlobal";

function App() {
  return (
    <AntdApp>
      <AntdGlobal />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ed6c00",
          },
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </AntdApp>
  );
}
export default App;
