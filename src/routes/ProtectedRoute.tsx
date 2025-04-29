import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '@/store'

type Props = {
  allowedRoles: string[]
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth)

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" replace />

  return <Outlet />
}

export default ProtectedRoute
