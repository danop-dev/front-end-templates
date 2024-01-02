import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

import { useLoginMutation } from "@/store/api/authApi";
import { useActions } from "@/store/hooks/useActions";

type FormValues = {
  username: string
  password: string
};

const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema) as any
  });

  const [login, { isLoading }] = useLoginMutation();
  const { setCredentials, setRole } = useActions();

  const onSubmit = handleSubmit((data) => {
    login(data)
      .unwrap()
      .then((res) => {
        setCredentials(res.data);
        setRole(res.data.role);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register("username")} placeholder="username" />

      <input type="password" {...register("password")} placeholder="*******" />
      {errors?.password && <p>{errors.password.message}</p>}

      <button type="submit">
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default LoginPage;