import { useForm } from 'react-hook-form';
import { Form } from '../types';
import { ErrorMessage } from './ErrorMessage';

const HookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  const handleFormSubmit = (values: Form) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          {...register('username', {
            minLength: {
              value: 2,
              message: 'Este campo debe tener longitud mínima de 2 caracteres',
            },
            required: {
              value: true,
              message: 'Este campo es requerido',
            },
          })}
        />

        {errors.username?.message && (
          <ErrorMessage message={errors.username?.message as string} />
        )}
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Este campo debe tener longitud mínima de 6 caracteres',
            },
            required: {
              value: true,
              message: 'Este campo es requerido',
            },
            // Queremos 1 mayuscula, 1 minuscula y 1 numero como mínimo => 1234AbCd
            validate: {
              hasValidFormat: (password) => {
                if (password.includes(' ')) {
                  return 'No puede tener espacios';
                }

                if (
                  /[a-z]/g.test(password) && // Comprobamos que tiene minúscula
                  /[A-Z]/g.test(password) && // Comprobamos que tiene mayúscula
                  /[0-9]/g.test(password) // Comprobamos que tiene número
                ) {
                  return true;
                }

                return 'Este campo debe tener al menos  1 mayuscula, 1 minuscula y 1 numero como mínimo';
              },
            },
          })}
        />

        {errors.password ? (
          <ErrorMessage message={errors.password?.message as string} />
        ) : null}
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
