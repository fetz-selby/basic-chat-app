import { API_TOKEN, ENDPOINTS, BASE_URL } from '../appConstants';
import { Message } from './types';

const token = API_TOKEN;

const postMessage = async (data: Omit<Message, '_id' | 'timestamp'>) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ ...data, token }),
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  };

  return fetch(`${BASE_URL}${ENDPOINTS}`, options);
};

const getMessages = async (query: string) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(
    `${BASE_URL}${ENDPOINTS}?token=${token}${query}`,
    options
  );

  return res.json();
};

export { postMessage, getMessages };
