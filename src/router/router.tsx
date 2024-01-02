import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from './routers';
import { useAppSelector } from '@/store/hooks/useAppSelector';


interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const renderRoutes = (routes: RouteConfig[]): React.ReactNode => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const RoutersLocal = () => {
  const role = useAppSelector((state) => state.user.role);
  const userRoutes = routesConfig[role] || [];
  return (
    <Routes>
      {renderRoutes(userRoutes)}
    </Routes>
  );
};

export default RoutersLocal;