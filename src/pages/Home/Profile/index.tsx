import { Link } from 'react-router-dom';

import github from '@/assets/github.svg';
import profileVideo from '@/assets/profile.mp4';

import styles from './index.scss';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Link to="/about">
          <video className={styles.photo} autoPlay loop muted playsInline>
            <source src={profileVideo} type="video/mp4" />
          </video>
        </Link>
        <div>이아현</div>
      </div>
      <div className={styles.description}>
        멋있는 게 좋아서 개발을 시작하게 된 🌱🐥 개발자입니다.
        <a href="https://github.com/LAH1203" target="_blank">
          <img src={github} alt="Github" className={styles.github} />
        </a>
      </div>
    </div>
  );
}

export default Profile;
