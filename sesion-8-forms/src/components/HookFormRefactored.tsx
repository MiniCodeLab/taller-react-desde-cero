import { useForm } from 'react-hook-form';
import { Form } from '../types';
import { Input } from './Input';

const HookFormRefactored = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();

  const handleFormSubmit = (values: Form) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        id="username"
        type="text"
        label="Nombre de usuario"
        name="username"
        register={register}
        validations={{
          minLength: {
            value: 2,
            message: 'Este campo debe tener longitud mínima de 2 caracteres',
          },
          required: {
            value: true,
            message: 'Este campo es requerido',
          },
        }}
        errorMessage={errors.username?.message}
      />

      <Input
        id="password"
        label="Contraseña"
        type="password"
        name="password"
        register={register}
        validations={{
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
            hasValidFormat: (password: string) => {
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
        }}
        errorMessage={errors.password?.message}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default HookFormRefactored;
