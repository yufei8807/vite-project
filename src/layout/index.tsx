import { Layout, Watermark } from "antd";
const { Content, Footer } = Layout;
import NavHeader from "@/components/NavHeader";
import NavSider from "@/components/NavSider";
import { Outlet } from "react-router-dom";
export default function LayoutFC() {
  return (
    <Watermark content="测试">
      <Layout>
        <NavSider />
        <Layout>
          <NavHeader />
          <Content style={{ padding: "20px" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>底部</Footer>
        </Layout>
      </Layout>
    </Watermark>
  );
}
