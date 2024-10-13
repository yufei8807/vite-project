import { Descriptions, DescriptionsProps } from "antd";
import styles from "./index.module.less";

function Dashboard() {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "UserName",
      children: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Telephone",
      children: "1810000000",
    },
    {
      key: "3",
      label: "Live",
      children: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Remark",
      children: "empty",
    },
    {
      key: "5",
      label: "Address",
      children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
          className={styles.userImg}
        />
        <Descriptions title="User Info" items={items} />
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className={styles.title}>司机数量</div>
          <div className={styles.data}>1234</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>司机数量</div>
          <div className={styles.data}>1234</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>司机数量</div>
          <div className={styles.data}>1234</div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>司机数量</div>
          <div className={styles.data}>1234</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
