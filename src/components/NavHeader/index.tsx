import { Button, Dropdown, Layout, Space, Switch, theme } from "antd";
const { Header } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { useState } from "react";

const NavHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"></a>,
    },
  ];

  return (
    <div>
      <Header className={styles.header} style={{ padding: 0, backgroundColor: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div style={{ marginRight: "20px" }}>
          <Switch checkedChildren="暗黑" unCheckedChildren="默认" defaultChecked style={{ marginRight: "20px" }} />
          <Dropdown menu={{ items }}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                青蛙角斗士
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
};
export default NavHeader;
