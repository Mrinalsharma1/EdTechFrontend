import { api } from "../apiSlice";
import { LoginRequest, LoginResponse, RegisterRequest, User } from "@/types/auth";
import { addUser } from "@/store/slices/authSlice";


export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({

    //login endpiont
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      // After successful login, update auth state
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addUser(data.user));
        } catch (error: any) {
          // Error handling done by baseQueryWithReauth
          // Optionally set specific auth error message 
        }
      },
    }),
    //regiseter endpoint 

    //forgot password 

    //logout 

  })
});

export const { useLoginMutation } = authApi;