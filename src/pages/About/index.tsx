import styles from './index.scss';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        생각하는 코드를 만드는 개발자, 이아현입니다.
      </h1>
      <section>
        <h2 className={styles.subtitle}>📞 Contact</h2>
        <div className={styles.table}>
          <p className={styles.index}>Email</p>
          <p>lah1203@naver.com</p>
          <p className={styles.index}>Phone</p>
          <p>010-8525-7106</p>
          <p className={styles.index}>Blog</p>
          <p>
            <a href="https://lah1203.netlify.app/">
              https://lah1203.netlify.app/
            </a>
          </p>
          <p className={styles.index}>Github</p>
          <p>
            <a href="https://github.com/LAH1203">https://github.com/LAH1203</a>
          </p>
        </div>
      </section>
      <section>
        <h2 className={styles.subtitle}>💻 Introduce</h2>
        <p>
          새로운 기술을 공부하는 것을 좋아하는, 그리고 내가 만든 결과물을 보고
          행복해하는 사람들이 많아지기를 바라는 개발자입니다. 현재는
          프론트엔드에 관심이 많아요 :)
        </p>
        <p></p>
      </section>
      <section>
        <h2 className={styles.subtitle}>🗂 Skill</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section>
        <h2 className={styles.subtitle}>🏫 Education</h2>
        <p>상명대학교 컴퓨터과학과 (2019.03 ~)</p>
      </section>
      <section>
        <h2 className={styles.subtitle}>🌈 Experience</h2>
        <ul>
          <li>
            우아한테크코스 4기 프론트엔드
            <ul>
              <li>
                <a href="https://youtu.be/DTX52Pv7PZM">테코톡 (this)</a>
              </li>
              <li>
                <a href="https://moyeora.site/">프로젝트 (모두모여라)</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
