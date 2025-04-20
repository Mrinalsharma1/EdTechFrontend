import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, UserRole } from '@/store/slices/authSlice';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { RootState } from '@/store';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>('student');

  const loggedInUserDetails = {
    role: useSelector((state: RootState) => state.auth.role),
    isAuthenticated: useSelector(
      (state: RootState) => state.auth.isAuthenticated
    ),
  };

  const redirectUser = (role: string) => {
    // Redirect based on role
    switch (role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'teacher':
        navigate('/teacher/dashboard');
        break;
      case 'student':
        navigate('/student/dashboard');
        break;
      default:
        navigate('/');
    }
  };

  const handleLogin = () => {
    dispatch(login(role));

    // Redirect based on role
    redirectUser(role);
  };

  useEffect(() => {
    if (loggedInUserDetails.isAuthenticated) {
      // Redirect based on role
      redirectUser(loggedInUserDetails.role);
    }
  }, [loggedInUserDetails]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>

        <div className='mb-4'>
          <Label htmlFor='role'>Select Role</Label>
          <Select
            value={role}
            onValueChange={(value) => setRole(value as UserRole)}
          >
            <SelectTrigger id='role' className='mt-2'>
              <SelectValue placeholder='Select your role' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='admin'>Admin</SelectItem>
              <SelectItem value='teacher'>Teacher</SelectItem>
              <SelectItem value='student'>Student</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className='w-full' onClick={handleLogin}>
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      </div>
    </div>
  );
};

export default Login;
