import Chart from './Chart';

import styles from './index.scss';

const Language = () => {
  return (
    <section className={styles.container}>
      <h2>Language</h2>
      <div className={styles.wrapper}>
        <Chart />
        <p>주로 React와 TypeScript를 사용한 웹 프론트엔드 개발을 해요.</p>
      </div>
    </section>
  );
};

export default Language;
