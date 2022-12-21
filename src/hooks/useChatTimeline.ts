import { useStore } from '../store';
import { useFetch } from './useFetch';
import { useMedia } from './useMedia';
import { FETCH_LIMIT } from '../appConstants';

const useChatTimeline = () => {
  const { author, hasError } = useStore();
  const { data, next, hasMore } = useFetch(FETCH_LIMIT);
  const { smallDevice } = useMedia();

  return { data, next, hasMore, author, smallDevice, hasError };
};

export { useChatTimeline };
