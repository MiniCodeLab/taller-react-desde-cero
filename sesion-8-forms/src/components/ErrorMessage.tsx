export type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return <p className="error-message">{message}</p>;
};
