import sharedStyles from '../@shared/index.scss';
import styles from './index.scss';

interface Experience {
  title: string;
  duration?: string;
  contents: {
    title: string;
    duration?: string;
    links: {
      title: string;
      href: string;
    }[];
    stacks?: string[];
    descriptions: string[];
  }[];
}

const experiences: Experience[] = [
  {
    title: '우아한테크코스 4기 FE',
    duration: '2022.02 - 2022.11',
    contents: [
      {
        title: '모두모여라 프로젝트',
        duration: '2022.07 - 2022.10',
        links: [
          {
            title: 'Website',
            href: 'https://moyeora.site/',
          },
          {
            title: 'Github',
            href: 'https://github.com/woowacourse-teams/2022-momo',
          },
        ],
        stacks: [
          'react',
          'typescript',
          'webpack',
          'react query',
          'recoil',
          'emotion',
          'jest',
        ],
        descriptions: [
          '모임 모집 플랫폼',
          '\n',
          '팀원이 모두 참여하여 피그마를 통해 시안 제작',
          'react query와 recoil을 사용한 클라이언트와 서버 데이터의 분리',
          'esbuild-loader와 fork-ts-checker-webpack-plugin을 통해 로더 및 타입 체킹 설정',
          '\n',
          'PC, 태블릿, 모바일 등 반응형 UI 적용',
          '캘린더, 이미지 드롭존 제작',
          '그 외 다양한 페이지, 컴포넌트 등의 제작 및 리팩토링 진행',
        ],
      },
      {
        title: 'Awesome Pay 라이브러리 출시',
        duration: '2022.05 - 2022.07',
        links: [
          {
            title: 'npm',
            href: 'https://www.npmjs.com/package/awesome-pay',
          },
          {
            title: 'Demo',
            href: 'https://lah1203.github.io/awesome-pay/',
          },
        ],
        stacks: ['react', 'typescript', 'react-scripts', 'styled-components'],
        descriptions: ['페이먼츠 심화 미션으로 진행한 npm 출시'],
      },
      {
        title: 'this 테코톡',
        links: [
          {
            title: 'Youtube',
            href: 'https://youtu.be/DTX52Pv7PZM',
          },
        ],
        descriptions: ['우아한테크코스 레벨 1 과정 중 진행한 테코톡'],
      },
    ],
  },
  {
    title: '개인',
    contents: [
      {
        title: '개인 블로그 제작',
        duration: '2022.09 - 현재',
        links: [
          {
            title: 'Website',
            href: 'https://lah1203.netlify.app/',
          },
          {
            title: 'Github',
            href: 'https://github.com/LAH1203/blog',
          },
        ],
        stacks: ['react', 'typescript', 'webpack', 'recoil', 'sass', 'netlify'],
        descriptions: [
          '이전에는 다른 사람이 제작한 블로그 테마를 사용하였기에 커스텀이 어려웠고, 루비로 작성된 코드는 한눈에 파악하기에도 힘들었음',
          '때문에 블로그 테마를 쉽게 커스텀하고 싶다는 마음에 만들기 시작',
          '\n',
          '마크다운 형식으로 저장된 파일을 읽어 markdown-loader를 통해 HTML 태그 형식으로 변환',
          '코드 하이라이팅을 위해 highlight.js 사용',
          '라이트/다크 모드 구현',
        ],
      },
    ],
  },
];

function Experience() {
  return (
    <section className={sharedStyles.section}>
      <h2 className={sharedStyles.subtitle}>Experience</h2>
      <div className={styles.container}>
        {experiences.map(({ title, duration, contents }) => (
          <section className={styles.section} key={title}>
            <div className={styles.header}>
              <h3 className={styles.title}>{title}</h3>
              {duration && <div className={styles.duration}>({duration})</div>}
            </div>
            {contents.map(content => (
              <div className={styles['content-container']} key={content.title}>
                <div className={styles['content-left']}>
                  <h4 className={styles.subtitle}>👣 {content.title}</h4>
                  {content.duration && (
                    <div className={styles.duration}>{content.duration}</div>
                  )}
                  <div className={styles['link-box']}>
                    {content.links.map(link => (
                      <a href={link.href} target="_blank" key={link.title}>
                        {link.title}
                      </a>
                    ))}
                  </div>
                  {content.stacks && (
                    <details className={styles.details}>
                      <summary>기술 스택</summary>
                      {content.stacks.map(stack => (
                        <p key={stack}>{stack}</p>
                      ))}
                    </details>
                  )}
                </div>
                <ul>
                  {content.descriptions.map((description, idx) => {
                    return description === '\n' ? (
                      <br key={idx} />
                    ) : (
                      <li key={idx}>{description}</li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}

export default Experience;
