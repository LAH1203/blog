import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import styles from './index.scss';

import Moon from '@/components/svg/Moon';
import Sun from '@/components/svg/Sun';
import { modeState } from '@/recoil/condition';

function Header() {
  const [mode, setMode] = useRecoilState(modeState);

  const navigate = useNavigate();

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
      <h2 className={styles.logo} onClick={() => navigate('/')}>
        B.C.C
      </h2>
      <div
        className={`${styles.toggle} ${mode === 'dark' ? styles.darkMode : ''}`}
        onClick={toggleMode}
      >
        <Sun width="1rem" color={mode === 'light' ? '#ba9ada' : 'none'} />
        <Moon width="1rem" color={mode === 'dark' ? '#FFFFFF' : 'none'} />
      </div>
    </div>
  );
}

export default Header;
