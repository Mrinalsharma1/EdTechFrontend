import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useNavigate } from 'react-router-dom'
import { logout } from '@/store/slices/authSlice'

const AuthButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logout())
      navigate('/login')
    } else {
      navigate('/login')
    }
  }
  return (
    <Button onClick={handleAuth} variant="outline" className="text-primary border-white">
      {isAuthenticated ? 'Logout' : 'Login'}
    </Button>
  )
}

export default AuthButton
