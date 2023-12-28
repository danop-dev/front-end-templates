
<h1 align="center">React | TypeScript | Vite | Redux | Toolkit | Axios | React Router</h1>
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
├── .vscode                               # VSCode settings (optional)
├── node_modules                          # Node modules
├── public                                # Static public assets (not imported anywhere in source code)
|
├── src                                   # Source files (alternatively `lib` or `app`)
│ ├── assets                              # Module assets (processed by webpack)
│ │ ├── style                             # scss
│ │ └── react.svg                         # logo
| |
│ ├── components                          # Folder for global components ( reusable components )
│ │ └── index.ts                          # export components
| |
│ ├── containers                          # Folder for global containers ( reusable containers )
│ │ └── index.ts                          # export containers
| |
│ ├── hooks                               # Global hooks
│ │ ├── index.ts                          # export hooks
│ │ └── useSessionStorage.ts              # useSessionStorage hook (set and get data from sessionStorage)
| |                           
│ ├── pages                               # Pages (wrapper views / routes pages)
│ │ ├── LoginPage.tsx                     # Login page
│ │ ├── NotFound.tsx                      # Not found page
│ │ └── index.ts
| |
│ ├── router                              # Router config
│ │ ├── index.ts                          # export router
│ │ ├── router.tsx                        # render Routes component config.
│ │ └── routers.tsx                       # Routes list (all routes paths - pages)
| |
│ ├── store                               # Redux store folder
│ │ ├── actions                           # Redux actions folder (all slice actions)
│ │ │ └── userSlice.ts
| | |
│ │ ├── api                               # Api folder
│ │ │ ├── apiConfig.ts                    # Api config (axios + toolkit query)
│ │ │ ├── authApi.ts                      # Auth api (login / register / logout ...)
│ │ │ └── usersApi.ts                     # Users api (get users list / get user by id ...)
│ │ │
│ │ ├── hooks                             # Redux hooks folder
│ │ │ ├── useActions.ts                   # useActions hook (dispatch actions)
│ │ │ └── useAppSelector.ts               # useAppSelector hook (get state)
│ │ │
│ │ ├── index.ts                          # export store
│ │ └── rootReducer.ts                    # Root reducer (combine all reducers)
│ │
│ ├── types                               # Folder with app types
│ │ ├── api.ts
│ │ └── user.ts
│ │
│ ├── utils                               # Folder with app utils
│ │ └── constants.tsx                     # App constants
│ │
│ ├── App.tsx                             # App component
│ ├── main.tsx                            # Entry point
│ └── vite-env.d.ts                       # Vite typescript declaration
|
├── .env                                  # Environment variables (optional)
├── .eslintrc.js                          # ESLint config
├── .gitignore                            # Git ignore config
├── Dockerfile                            # Docker config
├── index.html                            # HTML template
├── package-lock.json 
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
