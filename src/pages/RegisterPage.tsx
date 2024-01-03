import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useActions } from '@/store/hooks/useActions';
import { useRegisterMutation } from '@/store/api/authApi';

interface FieldType {
  username: string;
  password: string;
  passwordRepeat: string;
}

const RegisterPage = () => {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const { setCredentials, setRole } = useActions();
  const [visibilityPsw, setVisibilityPsw] = useState(false);

  const onFinish = (data: FieldType) => {
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
        <Input.Password
          visibilityToggle={{
            visible: visibilityPsw,
            onVisibleChange: setVisibilityPsw
          }}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm Password"
        name="passwordRepeat"
        rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
          visibilityToggle={{
            visible: visibilityPsw,
            onVisibleChange: setVisibilityPsw
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          loading={isLoading}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;