import sharedStyles from '../@shared/index.scss';

function Skill() {
  return (
    <section className={sharedStyles.section}>
      <h2 className={sharedStyles.subtitle}>🗂 Skill</h2>

      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

export default Skill;
