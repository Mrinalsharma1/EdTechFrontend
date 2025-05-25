import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/auth";

type AuthState = {
  user: User | null
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true;
    },

    //todo:will add all other reducers of auth after full adduser flow is tested
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
