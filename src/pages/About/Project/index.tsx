import githubImg from '@/assets/github.svg';
import homeImg from '@/assets/home.svg';

import styles from './index.scss';

const projects = [
  {
    name: '개인 블로그',
    startDate: '2022.09',
    endDate: 'now',
    techs: ['React', 'TypeScript', 'Webpack', 'Scss'],
    description: '공부 겸 시작하게 된 개인 블로그 개발',
    homepage: 'https://lah1203.netlify.app/',
    github: 'https://github.com/LAH1203/blog',
  },
  {
    name: '모두 모여라',
    startDate: '2022.06',
    endDate: '2022.10',
    techs: [
      'React',
      'TypeScript',
      'Webpack',
      'React Query',
      'Recoil',
      'Emotion',
      'Storybook',
      'MSW',
      'Jest',
    ],
    description: '모임 모집 서비스',
    homepage: 'https://moyeora.co.kr/',
    github: 'https://github.com/woowacourse-teams/2022-momo',
  },
];

const Project = () => {
  return (
    <section className={styles.container}>
      <h2>Project</h2>
      <ul className={styles.box}>
        {projects.map(
          ({
            name,
            startDate,
            endDate,
            techs,
            description,
            homepage,
            github,
          }) => (
            <li className={styles.item} key={name}>
              <div className={styles.name}>
                <h3>{name}</h3>
                <div className={styles.date}>
                  <p>{startDate}</p> - <p>{endDate}</p>
                </div>
                <a href={homepage} target="_blank">
                  <img src={homeImg} alt="홈페이지" />
                </a>
                <a href={github} target="_blank">
                  <img src={githubImg} alt="깃허브" />
                </a>
              </div>
              <div className={styles.tech}>{techs.join(', ')}</div>
              <p className={styles.description}>{description}</p>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Project;
