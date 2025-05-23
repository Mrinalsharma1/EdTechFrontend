import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/react-redux-hooks';
import { LoginRequest } from '@/types/auth';
import { useLoginMutation } from '@/services/endpoints/authApiSlice';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: ''
  });

  const [login, { data, isLoading, isError, isSuccess, error }] = useLoginMutation()

  const loggedInUserDetails = {
    role: useAppSelector((state) => state.auth.user?.role),
    isAuthenticated: useAppSelector(
      (state) => state.auth.isAuthenticated
    ),
  };

  const redirectUser = (roles: string[] | undefined) => {
    if (!roles || roles.length === 0) {
      navigate('/');
      return;
    }

    navigate('/')

    //currenlty no decision on how to track active role either backend will 
    //send activerole property on user or somehting else til then based on prioroity
    if (roles.includes('admin')) {
      navigate('/admin/dashboard');
    } else if (roles.includes('teacher')) {
      navigate('/teacher/dashboard');
    } else if (roles.includes('student')) {
      navigate('/student/dashboard');
    } else {
      navigate('/');
    }
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("form submitted", formData);
    try {
      await login(formData).unwrap();
    } catch (err) {
      console.error('Failed to login:', err);
    }


  }

  // const handleLogin = () => {
  //   // dispatch(login(role));
  //   // Redirect based on role
  //   redirectUser(role);
  // };

  useEffect(() => {
    if (loggedInUserDetails.isAuthenticated) {
      redirectUser(loggedInUserDetails.role);
    }
  }, [loggedInUserDetails.isAuthenticated, loggedInUserDetails.role, navigate]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {isError && (
            <p className="text-red-500 text-sm text-center">
              {error && 'data' in error ? (error.data as { message: string }).message : 'Login failed. Please try again.'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
