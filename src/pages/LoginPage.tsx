import { Button, Form, Input } from 'antd';
import { useLoginMutation } from "@/store/api/authApi";
import { useActions } from "@/store/hooks/useActions";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {

  const [login, { isLoading }] = useLoginMutation();
  const { setCredentials, setRole } = useActions();

  const onFinish = (data: any) => {
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
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;