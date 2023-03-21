import styles from './index.scss';

const histories = [
  {
    name: '우아한테크코스 4기 프론트엔드',
    startDate: '2022.02',
    endDate: '2022.11',
  },
  { name: '상명대학교 컴퓨터과학과', startDate: '2019.03', endDate: 'now' },
];

const History = () => {
  return (
    <section className={styles.component}>
      <h2>History</h2>
      <div className={styles.container}>
        <div className={styles.line} />
        <div className={styles.box}>
          {histories.map(({ name, startDate, endDate }) => (
            <div className={styles.item} key={name}>
              <div className={styles.wrapper}>
                <div className={styles.circle} />
                <div className={styles.date}>
                  <p>{startDate}</p> - <p>{endDate}</p>
                </div>
              </div>
              <p className={styles.name}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
