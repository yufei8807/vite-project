import styles from "./index.module.less";
import { Button, Form, Input } from "antd";
import userApi from "@/api/userApi";
import localstorage from "@/utils/localstorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [isLoging, setIsLoging] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: object) => {
    setIsLoging(true);
    try {
      userApi.login(values).then(res => {
        console.log(res);
        localstorage.set("token", res.token);
        setIsLoging(false);
        navigate("/welcome");
      });
    } catch (error) {
      console.log(error);
      setIsLoging(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTitle}>管理系统</div>
        <Form name="basic" layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item name="password" label="密码" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoging}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
