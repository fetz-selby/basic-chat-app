export type Maybe<T> = T | null | undefined;
export interface Message {
  _id: string;
  message: string;
  author: string;
  token: string;
  timestamp: number;
}
