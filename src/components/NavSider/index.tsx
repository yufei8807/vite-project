import { Layout, Menu } from "antd";
const { Sider } = Layout;
import styles from "./index.module.less";
import siderLog from "@/assets/images/logo.png";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const NavSider = () => {
  const navigate = useNavigate();
  return (
    <Sider className={styles.sider}>
      <div className={styles.siderLogo} onClick={() => navigate("/")}>
        <img src={siderLog} alt="" className={styles.img} />
        <span>后台管理系统</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
};

export default NavSider;
