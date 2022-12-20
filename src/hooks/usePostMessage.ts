import { useCallback } from 'react';
import { useStore } from '../store';

const usePostMessage = () => {
  const { postMessage } = useStore();

  const postNewMessage = useCallback(
    (message: string) => {
      postMessage(message);
    },
    [postMessage]
  );

  return { postNewMessage };
};

export { usePostMessage };
