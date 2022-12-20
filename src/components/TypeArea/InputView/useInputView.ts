import { useState, useCallback} from 'react';

const useInputView = (callback: (v: string) => void) => {
    const [value, setValue] = useState('');

  const handleOnSend = useCallback(() => {
    callback(value);
    setValue('');
  }, [callback, value]);

  return {
    value,
    setValue,
    handleOnSend,
  }
}

export { useInputView };