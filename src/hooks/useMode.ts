import { useState } from 'react';

import { Mode } from '@/types/data';

const useMode = () => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem('mode') as Mode) ?? 'light',
  );

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

  return { mode, toggleMode };
};

export { useMode };
