import create from 'zustand';
import { Maybe, Message } from '../api/types';
import { getMessages, postMessage } from '../api';
import {
  API_TOKEN,
  DEFAULT_AUTHOR,
  BEGIN_SINCE,
  FETCH_LIMIT,
} from '../appConstants';

interface State {
  author: string;
  setAuthor: (author: string) => void;
  token: string;
  limit: number;
  setLimit: (limit: number) => void;
  setToken: (token: string) => void;
  messages: Maybe<Message[]>;
  addMessages: (messages: Message[]) => void;
  since: number;
  hasError: boolean;
  hasMore: boolean;
  setSince: (since: number) => void;
  fetchNext: () => void;
  postMessage: (message: string) => void;
}

export const useStore = create<State>((set, get) => ({
  author: DEFAULT_AUTHOR,
  setAuthor: (author: string) => set({ author }),
  token: API_TOKEN,
  limit: FETCH_LIMIT,
  setLimit: (limit: number) => set({ limit }),
  setToken: (token: string) => set({ token }),
  messages: null,
  addMessages: (_messages: Message[]) => {
    const { messages } = get();
    set({ messages: [...(messages || []), ..._messages] });
  },
  since: BEGIN_SINCE,
  hasError: false,
  hasMore: true,
  setSince: (since: number) => set({ since }),
  fetchNext: async () => {
    const { since, addMessages, limit } = get();
    let data = null;
    try {
      data = await getMessages(`&since=${since}&limit=${limit}`);
      set({ hasError: false });
    } catch (e) {
      set({ hasError: true });

      /* Send error log to an observability */
      console.log(e);
      return;
    }
    if (data && data.length === 0) {
      set({ hasMore: false });
      return;
    }

    set({ hasMore: true });
    set({ since: data[data.length - 1].timestamp });
    addMessages(data);
  },
  postMessage: async (message: string) => {
    const { author, token, fetchNext } = get();
    await postMessage({ message, author, token });
    fetchNext();
  },
}));
