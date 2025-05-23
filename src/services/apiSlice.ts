import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { ErrorHandler } from '@/lib/Errors/errorHandler';
import { addUser } from '@/store/slices/authSlice';
import { User } from '@/types/auth';


//will integrate the full error hanlding after one compelte api request 
//cylce with this wwhole rtk query setup for api layer 


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/users',
    credentials: 'include',  //http only cookie configured 
})


//wrapper to handle the refresh token logic this will wrap our basequery  
const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {


    //origianl request with tokens 
    let result = await baseQuery(args, api, extraOptions);


    // Checking for 401 response - if yes need token refresh
    if (isUnauthorizedResponse(result) && !isAuthRequest(args)) {
        //will use mutex library to lock this as we dont want to trigger mutplte 
        //token refrehses if one is ongoing will not shoot another 
        try {
            const refreshResult = await baseQuery('/refresh', api, extraOptions);

            if (refreshResult.data) {
                //if we will get again new pair of acces token and refrehs token and userinfo
                //add the user to store 
                const user = (refreshResult.data as { user: User }).user
                api.dispatch(addUser(user))

                //retry the original requset with new token pairs now 
                result = await baseQuery(args, api, extraOptions);
            }
            else {
                //failed to refresh logout clear the user form stoe
                // api.dispatch(removeUser())
            }

        } catch (error) {
            //failed to refresh logout clear the user form stoe
            // api.dispatch(removeUser())
        }
    }

    if (result.error) {
        //  tranform the error into error handler 
        //   error: errorHandler.handleApiError(createAxiosLikeError(result))
    }

    return result;
}

function isUnauthorizedResponse(result: any) {
    return result.error && result.error.status === 401;
}

function isAuthRequest(args: string | FetchArgs) {
    const endpoint = typeof args === 'string' ? args : args.url;
    return endpoint.includes('/auth/login') ||
        endpoint.includes('/auth/refresh') ||
        endpoint.includes('/auth/logout');
}


export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
})