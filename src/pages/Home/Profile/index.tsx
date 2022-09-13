import styles from './index.scss';

import profileVideo from '@/assets/profile.mp4';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div>
          <video className={styles.photo} autoPlay loop muted playsInline>
            <source src={profileVideo} type="video/mp4" />
          </video>
        </div>
        <div>이아현</div>
      </div>
      <div className={styles.description}>
        멋있는 게 좋아서 개발을 시작하게 된 🌱🐥 개발자입니다.
        <a
          href="https://github.com/LAH1203"
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Profile;
