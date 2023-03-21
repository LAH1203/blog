import Profile from './Profile';
import Language from './Language';
import Project from './Project';
import History from './History';

import styles from './index.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Language />
      <Project />
      <History />
    </div>
  );
};

export default About;
