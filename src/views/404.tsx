import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
export default function Error404() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    />
  );
}
