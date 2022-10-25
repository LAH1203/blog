import sharedStyles from '../@shared/index.scss';
import styles from './index.scss';

const skills = [
  {
    name: 'React.js',
    descriptions: [
      '클래스형 컴포넌트와 함수형 컴포넌트의 차이를 알고 있어, 클래스형 컴포넌트에서 함수형 컴포넌트로 마이그레이션한 경험이 있어요.',
      '상태 변화에 따른 리렌더링을 이해하여 필요한 곳에만 메모이제이션을 적용해요.',
      '컴포넌트와 커스텀 훅을 사용한 로직 분리에 능숙해요.',
      '성능, 접근성 최적화를 통해 사용성을 높일 수 있어요.',
      '스토리북을 사용한 CDD를 할 수 있어요.',
    ],
  },
  {
    name: 'JavaScript/TypeScript',
    descriptions: [
      '자바스크립트의 기본 개념을 이해하고 실제 프로덕트에 응용해요.',
      '타입 시스템을 이해하고 컴파일/런타임 시점에 맞게 안전하게 타이핑해요.',
    ],
  },
  {
    name: 'HTML/CSS',
    descriptions: [
      'HTML과 CSS만으로 정적 페이지를 만들 수 있어요.',
      '사용자 인터랙션 애니메이션을 좋아해요.',
    ],
  },
  {
    name: 'Node.js',
    descriptions: [
      'express를 사용하여 서버를 구축할 수 있어요.',
      'mysql, mongodb 등을 통한 서버와 데이터베이스의 연동 경험이 있어요.',
    ],
  },
];

function Skill() {
  return (
    <section className={sharedStyles.section}>
      <h2 className={sharedStyles.subtitle}>🗂 Skill</h2>
      {skills.map(skill => (
        <section key={skill.name}>
          <h3 className={styles.heading}>📖 {skill.name}</h3>
          <ul>
            {skill.descriptions.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}

export default Skill;
