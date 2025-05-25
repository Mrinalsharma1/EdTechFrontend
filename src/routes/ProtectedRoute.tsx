import { useAppSelector } from '../hooks/react-redux-hooks'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  allowedRoles: string[]
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { isAuthenticated, role } = useAppSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.user?.role,
  }));

  console.log(isAuthenticated, role);

  //will have to rethink the whole role setup 

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (Array.isArray(role) && !allowedRoles.includes(role[0])) return <Navigate to="/unauthorized" replace />

  return <Outlet />
}

export default ProtectedRoute
