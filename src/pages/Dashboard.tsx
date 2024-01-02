import { useAppSelector } from '@/store/hooks/useAppSelector';

const Dashboard = () => {

  const user = useAppSelector((state) => state.user.user);

  return (
    <div>Dashboard {user.username} - {user.role}</div>
  );
};

export default Dashboard;