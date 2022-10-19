import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import styles from './index.scss';

import Logo from '@/assets/star.png';
import Moon from '@/components/svg/Moon';
import Sun from '@/components/svg/Sun';
import { modeState } from '@/recoil/condition';

function Header() {
  const [mode, setMode] = useRecoilState(modeState);

  const toggleMode = () => {
    setMode(prevMode => {
      if (prevMode === 'light') {
        localStorage.setItem('mode', 'dark');
        return 'dark';
      }

      localStorage.setItem('mode', 'light');
      return 'light';
    });
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="로고" />
      </Link>
      <div
        className={`${styles.toggle} ${mode === 'dark' ? styles.darkMode : ''}`}
        onClick={toggleMode}
      >
        <Sun width="1rem" color={mode === 'light' ? '#FFAFBD' : 'none'} />
        <Moon width="1rem" color={mode === 'dark' ? '#FFFFFF' : 'none'} />
      </div>
    </div>
  );
}

export default Header;
