import profileVideo from '@/assets/profile.mp4';

import styles from './index.scss';

function Profile() {
  return (
    <section className={styles.container}>
      <video className={styles.photo} autoPlay loop muted playsInline>
        <source src={profileVideo} type="video/mp4" />
      </video>
      <div className={styles.description}>
        <div className={styles.profile}>
          <h2 className={styles.name}>이아현</h2>
          <a href="https://github.com/LAH1203" target="_blank">
            @LAH1203
          </a>
        </div>
        <p>멋있는 게 세상에서 제일 좋아!</p>
      </div>
    </section>
  );
}

export default Profile;
