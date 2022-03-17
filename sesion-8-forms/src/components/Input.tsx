import { UseFormRegister } from 'react-hook-form';
import { Form } from '../types';
import { ErrorMessage } from './ErrorMessage';

type Props = {
  type: 'text' | 'password';
  id: string;
  label: string;
  name: keyof Form;
  register: UseFormRegister<Form>;
  errorMessage?: string;
  validations: Record<string, unknown>;
};

export const Input = ({
  id,
  name,
  type,
  label,
  register,
  errorMessage,
  validations,
}: Props) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}:</label>
      <input id={id} type={type} {...register(name, validations)} />

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </fieldset>
  );
};
