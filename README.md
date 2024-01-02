
<h1 align="center">React | TypeScript | Vite</h1>
<p align="center">

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Getting Started
```
  # Install dependencies
  npm install

  # Run the app
  npm run dev
```

## Docker
```
  # build Docker image
  docker build -t docker-app .

  # run Docker image
  docker run --name docker-app -p 5173:5173 -d docker-app
```


## Project Structure

This project is a front-end template using React and Vite. Below is the structure of the directories and files:

```
├── .vscode                         # VSCode settings (optional)
├── node_modules                    # Node modules
├── public                          # Static public assets (not imported anywhere in source code)
|
├── src                             # Source files (alternatively `lib` or `app`)
│ ├── assets                        # Module assets (processed by webpack)
│ │ ├── style                       # scss
│ │ └── react.svg                   # logo
| |
│ ├── components                    # Folder for global components ( reusable components )
│ │ └── index.ts                    # export components
| |
│ ├── containers                    # Folder for global containers ( reusable containers )
│ │ └── index.ts                    # export containers
| |
│ ├── hooks                         # Global hooks
│ │ ├── index.ts                    # export hooks
│ │ └── useSessionStorage.ts        # useSessionStorage hook (set and get data from sessionStorage)
| |                           
│ ├── pages                         # Pages (wrapper views / routes pages)
│ │ ├── LoginPage.tsx               # Login page
│ │ ├── NotFound.tsx                # Not found page
│ │ └── index.ts
| |
│ ├── router                        # Router config
│ │ ├── index.ts                    # export router
│ │ ├── router.tsx                  # render Routes component config.
│ │ └── routers.tsx                 # Routes list (all routes paths - pages)
| |
│ ├── store                         # Redux store folder
│ │ ├── actions                     # Redux actions folder (all slice actions)
│ │ │ └── userSlice.ts
| | |
│ │ ├── api                         # Api folder
│ │ │ ├── apiConfig.ts              # Api config (axios + toolkit query)
│ │ │ ├── authApi.ts                # Auth api (login / register / logout ...)
│ │ │ └── usersApi.ts               # Users api (get users list / get user by id ...)
│ │ │   
│ │ ├── hooks                       # Redux hooks folder
│ │ │ ├── useActions.ts             # useActions hook (dispatch actions)
│ │ │ └── useAppSelector.ts         # useAppSelector hook (get state)
│ │ │
│ │ ├── index.ts                    # export store
│ │ └── rootReducer.ts              # Root reducer (combine all reducers)
│ │
│ ├── types                         # Folder with app types
│ │ ├── api.ts
│ │ └── user.ts
│ │
│ ├── utils                         # Folder with app utils
│ │ └── constants.tsx               # App constants
│ │
│ ├── App.tsx                       # App component
│ ├── main.tsx                      # Entry point
│ └── vite-env.d.ts                 # Vite typescript declaration
|
├── .env                            # Environment variables (optional)
├── .eslintrc.js                    # ESLint config
├── .gitignore                      # Git ignore config
├── Dockerfile                      # Docker config
├── index.html                      # HTML template
├── package-lock.json 
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Technologies

| Package               | Description                                    | Docs                                                                            |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| Data Fetching         | Redux Toolkit                                  | [Docs](hhttps://redux-toolkit.js.org/rtk-query/overview)                        |
| HTTP Client           | Axios                                          | [Docs](https://axios-http.com/docs/intro)                                       |
| Form                  | React Hook Form                                | [Docs](https://react-hook-form.com/)                                            |
| Validation            | Yup                                            | [Docs](https://github.com/jquense/yup)                                          |
| Routing               | React Router                                   | [Docs](https://reactrouter.com/)                                                |
| TypeScript            | TypeScript                                     | [Docs](https://create-react-app.dev/docs/adding-typescript/)                    |
| Frontend Tooling      | Vite                                           | [Docs](https://vitejs.dev/)                                                     |


## Documentation and Resources


### useSessionStorage Hook
`useSessionStorage` is a custom hook that functions similarly to React's `useState`, but with the added feature of synchronizing the state with the browser's session storage.

#### Importing the Hook
To use `useSessionStorage`, import it into your component file:

```javascript
import useSessionStorage from './path/to/useSessionStorage';
```

#### Parameters
`key` (string): The key under which the value is stored in session storage.
`initialValue` (T): The initial value of the state. If a value already exists in session storage for the specified key, that value will be used instead.

#### Return Value
The hook returns an array containing:
`storedValue` (T): The current state.
`setValue` (function): A function to set the value of the state, which can accept either a new value or a function.

#### Example
```javascript
const [name, setName] = useSessionStorage('name', 'Anonymous');

// Function to update the name
const updateName = () => setName('John Doe');

// JSX
return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Change Name</button>
    </div>
);
```


### Configuring Routes
To add a new route, add a new object to the `routes` array in `src/router/routers.tsx`. The object should have the following properties:

Each route is an object with the following properties:

- `path`: The URL path for the route.
- `element`: The React component to render for this route.
- `children`: An optional array of nested route objects.


Add or remove new routes in `src/router/routers.tsx`:
```javascript
export const userRoles = {
  ROLE_PUBLIC: 1,
  ROLE_PRIVATE: 2,
  ROLE_ADMIN: 3,
};
```

`routesConfig` is an array of objects, each of which represents a route. Each route object has the following properties (key is a type of user role and value is a route object):

```javascript
export const routesConfig: Record<number, RouteConfig[]> = {
  [userRoles.ROLE_PUBLIC]: [
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
      element: <Navigate to="/login" />
    }
  ],
  [userRoles.ROLE_PRIVATE]: [
    {
      path: '/',
      element: <Navigate to="/dashboard" />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ],
  [userRoles.ROLE_ADMIN]: [
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/users/:id',
      element: <User />,
    },
    {
      path: '*',
      element: <Navigate to="/users" />,
    },
  ],
};
```

### Configuring Store (Redux)

#### 1. Add new slice to store:
Create new slice in `src/store/actions` folder (all slice actions):

Example:
```javascript
import { userRoles } from "@/utils/constants";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Example {
  example: any;
}

const initialState: Example = {
  example: null,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setExample: (state, action: PayloadAction<any>) => {
      state.example = action.payload;
    },
  },
});

export const userReducer = exampleSlice.reducer;
export const userActions = exampleSlice.actions;
```

#### 2. Add new slice to `src/store/hooks/useActions.ts`:
```javascript
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { userActions } from "@/store/actions/userSlice";
import { exampleActions } from "@/store/actions/exampleSlice";

const allActions = {
  ...userActions,
  ...exampleActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
```

#### 3. Add new slice to `src/store/rootReducer.ts`:
```javascript
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  example: exampleReducer,
});
```

#### 4. Import and use new slice in component:
```javascript
import { useActions } from "@/store/hooks/useActions";
import { useAppSelector } from "@/store/hooks/useAppSelector";

const Example = () => {
  const { example } = useAppSelector((state) => state.example);
  const { setExample } = useActions();

  const handleSetExample = () => {
    setExample("example");
  };

  return (
    <div>
      <p>{example}</p>
      <button onClick={handleSetExample}>Set example</button>
    </div>
  );
};
```
