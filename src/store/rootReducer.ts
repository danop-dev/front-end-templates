import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "@/store/actions/userSlice";
import { api } from "@/store/api/apiConfig";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
});
