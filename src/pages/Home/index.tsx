import Logo from '@/assets/big-logo.gif';
import { Link } from 'react-router-dom';

import styles from './index.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="로고" />
      <div className={styles.wrapper}>
        <Link to="/about">저에 대해 궁금하신가요?</Link>
        <Link to="/posts">제가 쓴 글이에요.</Link>
        <a href="https://github.com/LAH1203" target="_blank">
          제 깃허브로 가실까요?
        </a>
      </div>
    </div>
  );
};
export default Home;
