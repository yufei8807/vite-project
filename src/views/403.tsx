import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function Error403() {
  const navigate = useNavigate();
  function backToHome(): void {
    navigate("/");
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    />
  );
}
