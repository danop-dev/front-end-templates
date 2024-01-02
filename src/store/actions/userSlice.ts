import { userRoles } from "@/utils/constants";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthorize: boolean;
  user: any | null;
  role: number;
}

const initialState: AuthState = {
  user: null,
  isAuthorize: false,
  role: userRoles.ROLE_PUBLIC,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      if (action.payload?.token) {
        state.isAuthorize = true;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("isAuthorized", "true");
      } else {
        state.isAuthorize = false;
        localStorage.removeItem("token");
        localStorage.removeItem("isAuthorized");
      }
      state.user = action.payload;
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorize = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthorize = false;
      localStorage.removeItem("token");
    },
    setRole: (state, action: PayloadAction<number>) => {
      state.role = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
