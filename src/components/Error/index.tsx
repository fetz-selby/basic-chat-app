interface ErrorProps {
  message: string;
}
const Error = ({ message }: ErrorProps) => <h4>Something went wrong</h4>;

export { Error };
