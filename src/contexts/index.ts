import { createContext } from 'react';

import { Mode } from '@/types/data';

const ModeContext = createContext<{ mode: Mode; toggleMode: () => void }>({
  mode: 'light',
  toggleMode: () => {},
});

export { ModeContext };
