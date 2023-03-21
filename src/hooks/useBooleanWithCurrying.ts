import { useState } from 'react';

const useBooleanWithCurrying = (initState: boolean = false) => {
  const [state, setState] = useState(initState);

  const changeState = (newState: boolean) => () => {
    setState(newState);
  };

  return [state, changeState] as const;
};

export default useBooleanWithCurrying;
