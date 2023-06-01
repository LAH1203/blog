import Profile from './Profile';
import Project from './Project';
import History from './History';

import styles from './index.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Project />
      <History />
    </div>
  );
};

export default Home;
