import mail from '@/assets/mail.svg';
import github from '@/assets/github.svg';

import styles from './index.scss';

const Profile = () => {
  return (
    <section className={styles.container}>
      <div>
        <p>재미와 멋짐을 추구하는 개발자 이아현입니다.</p>
        <p>지금은 웹 프론트엔드 개발자를 꿈꾸며 공부하고 있어요 :)</p>
      </div>
      <div className={styles.buttons}>
        <a href="mailto:lah1203@naver.com">
          <img src={mail} alt="메일" />
        </a>
        <a href="https://github.com/LAH1203" target="_blank">
          <img src={github} alt="깃허브" />
        </a>
      </div>
    </section>
  );
};

export default Profile;
