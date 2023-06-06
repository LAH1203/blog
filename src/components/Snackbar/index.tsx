import { createPortal } from 'react-dom';

import styles from './index.scss';

interface SnackbarProps {
  isSnackbarShowing: boolean;
  children: string;
}

const Snackbar = ({ isSnackbarShowing, children }: SnackbarProps) => {
  const el = document.getElementById('snackbar') as HTMLElement;

  const Snackbar = (
    <div className={`${styles.container} ${isSnackbarShowing && styles.show}`}>
      {children}
    </div>
  );

  return createPortal(Snackbar, el);
};

export default Snackbar;
