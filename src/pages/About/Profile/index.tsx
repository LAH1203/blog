import sharedStyles from '../@shared/index.scss';
import styles from './index.scss';

function Profile() {
  return (
    <section className={sharedStyles.section}>
      <h2 className={sharedStyles.subtitle}>Contact</h2>
      <div className={styles.table}>
        <p className={styles.contact}>Email</p>
        <p>lah1203@naver.com</p>
        <p className={styles.contact}>Phone</p>
        <p>010-8525-7106</p>
        <p className={styles.contact}>Blog</p>
        <p>
          <a href="https://lah1203.netlify.app/" target="_blank">
            https://lah1203.netlify.app/
          </a>
        </p>
        <p className={styles.contact}>Github</p>
        <p>
          <a href="https://github.com/LAH1203" target="_blank">
            https://github.com/LAH1203
          </a>
        </p>
      </div>
    </section>
  );
}

export default Profile;
