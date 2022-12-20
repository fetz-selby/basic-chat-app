import { useCallback, useEffect } from 'react';
import { useStore } from '../store';

const useFetch = (_limit: number) => {
  const { messages, fetchNext, hasMore, setLimit } = useStore();

  const next = useCallback(() => {
    setLimit(_limit);
    fetchNext();
  }, [fetchNext, setLimit, _limit]);

  useEffect(() => {
    next();
  }, [next]);

  return {
    data: messages || [],
    next,
    hasMore,
  };
};

export { useFetch };
