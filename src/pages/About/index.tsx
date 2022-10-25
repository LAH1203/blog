import Profile from './Profile';
import Introduce from './Introduce';
import Experience from './Experience';
import Education from './Education';

import styles from './index.scss';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        생각하는 코드를 만드는 개발자, 이아현입니다.
      </h1>
      <Profile />
      <Introduce />
      <Experience />
      <Education />
    </div>
  );
}

export default About;
