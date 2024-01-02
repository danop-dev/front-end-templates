import { useEffect } from 'react';
import RoutersLocal from './router';
import { useUserQuery } from '@/store/api/authApi';
import { useActions } from '@/store/hooks/useActions';

const App = () => {
  const token = localStorage.getItem('token');
  const isAuthorize = localStorage.getItem('isAuthorize');
  const { setCredentials, setRole } = useActions();

  const { data, isLoading } = useUserQuery(undefined, {
    skip: !token && !isAuthorize,
  });

  useEffect(() => {
    if (data?.data) {
      setCredentials(data.data);
      setRole(data.data.role);
    }
  }, [data, setCredentials, setRole]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <RoutersLocal />;
};

export default App;