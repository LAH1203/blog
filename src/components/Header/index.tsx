import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@/assets/star.png';
import Moon from '@/components/svg/Moon';
import Sun from '@/components/svg/Sun';

import { ModeContext } from '@/contexts';

import styles from './index.scss';

function Header() {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="로고" />
      </Link>
      <div className={styles.toggle} onClick={toggleMode}>
        <Sun width="1rem" color={mode === 'dark' ? 'none' : '#FFAFBD'} />
        <Moon width="1rem" color={mode === 'dark' ? '#FFAFBD' : 'none'} />
      </div>
    </div>
  );
}

export default Header;
