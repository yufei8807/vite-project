import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import localstorage from "@/utils/localstorage";
export default function Welcome() {
  return (
    <>
      <Result
        icon={<SmileOutlined />}
        title="Great, Welcome!"
        extra={
          <>
            <Button
              type="primary"
              onClick={() => {
                localstorage.set("test", { name: "张三", age: 22 });
              }}
            >
              设置storage
            </Button>
            <Button type="primary" onClick={() => console.log(localstorage.get("test"))}>
              读取storage
            </Button>
            <Button type="primary" onClick={() => localstorage.remove("test")}>
              清楚storage
            </Button>
          </>
        }
      />
    </>
  );
}
