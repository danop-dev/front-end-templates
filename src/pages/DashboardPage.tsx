import { Button } from 'antd';
import { useActions } from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useAppSelector';

const DashboardPage = () => {

  const user = useAppSelector((state) => state.user.user);
  const { logOut } = useActions();
  const logoutHandler = () => logOut();

  return (
    <>
      <div>Dashboard {user.username} - {user.role}</div>
      <Button
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </>
  );
};

export default DashboardPage;