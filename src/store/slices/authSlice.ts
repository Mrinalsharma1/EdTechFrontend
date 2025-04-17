import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "admin" | "student" | "teacher" | "guest";

interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
}

const initialState: AuthState = {
  isAuthenticated: true,
  role: "admin",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserRole>) => {
      state.isAuthenticated = true;
      state.role = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "guest";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
