import { useState } from 'react';

const useSnackbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  const showSnackbar = () => {
    setIsShowing(true);

    setTimeout(() => {
      setIsShowing(false);
    }, 2000);
  };

  return { isSnackbarShowing: isShowing, showSnackbar };
};

export default useSnackbar;
