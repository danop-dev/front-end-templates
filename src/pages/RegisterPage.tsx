import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useActions } from '@/store/hooks/useActions';
import { useRegisterMutation } from '@/store/api/authApi';

interface FormValues {
  username: string;
  password: string;
  passwordRepeat: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  passwordRepeat: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema) as any
  });
  const [registerUser, { isLoading }] = useRegisterMutation();
  const { setCredentials, setRole } = useActions();

  const onSubmit = (data: FormValues) => {
    // Handle form submission
    console.log(data);
    registerUser(data)
      .unwrap()
      .then((res) => {
        console.log(res);
        setCredentials(res.data);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="username" />
      {errors.username && <p>{errors.username.message}</p>}

      <input {...register("password")} type="password" placeholder="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("passwordRepeat")} type="password" placeholder="repeat password" />
      {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}

      <button type="submit">
        {isLoading ? "Register..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterPage;