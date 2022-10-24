import sharedStyles from '../@shared/index.scss';

function Introduce() {
  return (
    <section className={sharedStyles.section}>
      <h2 className={sharedStyles.subtitle}>💻 Introduce</h2>
      <p>
        새로운 기술을 공부하는 것을 좋아하는, 그리고 내가 만든 결과물로 인해
        행복해지는 사람들이 많아지기를 바라는 개발자예요.
      </p>
      <p>
        다른 사람과{' '}
        <span className={sharedStyles.important}>함께 자라는 개발자</span>를
        지향하고 있어요. 요즘은 다른 사람과 소통하는 게 낙이에요!
      </p>
      <p>
        <span className={sharedStyles.important}>깔끔한 코드</span>를 정말
        사랑해요. Better Clean Code를 신조로 삼아 더 나은 코드를 작성하는
        개발자가 되기 위해 노력하고 있어요 :)
      </p>
    </section>
  );
}

export default Introduce;
