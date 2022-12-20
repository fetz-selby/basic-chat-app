import { InputView } from './InputView';
import { usePostMessage } from '../../hooks/usePostMessage';

const TypeArea = () => {
  const { postNewMessage } = usePostMessage();
  return <InputView onSendClicked={postNewMessage} />;
};

export { TypeArea };
