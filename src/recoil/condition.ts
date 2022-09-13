import { atom } from 'recoil';

// type Mode = 'light' | 'dark';

const modeState = atom<string>({
  key: 'modeState',
  default: localStorage.getItem('mode') ?? 'light',
});

export { modeState };
