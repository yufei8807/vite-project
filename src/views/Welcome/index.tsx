import styles from "./index.module.less";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className="content">
        <div className="subTitle">欢迎使用</div>
        <div className="title">React18后台管理系统</div>
        <div className="desc">React18 + ReactRouter6 + antd + TypeScript + vite</div>
      </div>
      <div className={styles.img} />
    </div>
  );
};

export default Welcome;
