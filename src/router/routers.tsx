import { userRoles } from "@/utils/constants";
import { Navigate, Outlet } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  Dashboard
} from "@/pages";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
};

export const routesConfig: Record<number, RouteConfig[]> = {
  [userRoles.ROLE_PUBLIC]: [
    {
      path: '/',
      element: <div>layout <Outlet /> layout</div>,
      children: [
        {
          path: '',
          element: <div>root path</div>
        },
        {
          path: 'test',
          element: <div>/test path</div>
        },
        {
          path: 'test/test',
          element: <div>/test/test path</div>
        },
      ],
    },
    {
      path: '/login',
      element: <div>layout <LoginPage /> layout</div>,
    },
    {
      path: '/register',
      element: <div>layout <Outlet /> layout</div>,
      children: [
        {
          path: '',
          element: <RegisterPage />
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ],
  [userRoles.ROLE_PRIVATE]: [
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '*',
      element: <Navigate to="/dashboard" />
    }
  ],
  [userRoles.ROLE_ADMIN]: [
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '*',
      element: <Navigate to="/dashboard" />
    }
  ],
};