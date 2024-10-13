import { Layout, Menu } from "antd";
const { Sider } = Layout;
import styles from "./index.module.less";
import siderLog from "@/assets/images/logo.png";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const NavSider = () => {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState();

  const handleClick = e => {
    console.log("e", e);
    setSelectedKeys(e.key);
    navigate(e.key);
  };

  return (
    <Sider className={styles.sider}>
      <div className={styles.siderLogo} onClick={() => navigate("/")}>
        <img src={siderLog} alt="" className={styles.img} />
        <span>后台管理系统</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleClick}
        selectedKeys={selectedKeys}
        items={[
          {
            key: "dashboard",
            icon: <UserOutlined />,
            label: "Dashboard",
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
