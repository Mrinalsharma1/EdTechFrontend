// src/routes/routeConfig.tsx

import { lazy } from 'react'

import ProtectedRoute from './ProtectedRoute'
import AdminLayout from '@/layouts/AdminLayout'
import TeacherLayout from '@/layouts/TeacherLayout'
import StudentLayout from '@/layouts/StudentLayout'
import WebsiteLayout from '@/layouts/WebsiteLayout'

const Home = lazy(() => import('@/pages/website/Home'))
const Login = lazy(() => import('@/pages/auth/Login'))
const Unauthorized = lazy(() => import('@/pages/auth/Unauthorized'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'))
const TeacherDashboard = lazy(() => import('@/pages/teacher/Dashboard'))
const StudentDashboard = lazy(() => import('@/pages/student/Dashboard'))

export const routes = [
  // Website Routes
  {
    path: '/',
    element: <WebsiteLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  // Login Routes
  {
    path: '/login',
    element: <Login />,
  },
  // Unauthorized Routes
  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
  // Admin Routes
  {
    path: '/admin',
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        path: 'dashboard',
        element: <AdminLayout />,
        children: [{ index: true, element: <AdminDashboard /> }],
      },
    ],
  },
  // Teacher Routes
  {
    path: '/teacher',
    element: <ProtectedRoute allowedRoles={['teacher']} />,
    children: [
      {
        path: 'dashboard',
        element: <TeacherLayout />,
        children: [{ index: true, element: <TeacherDashboard /> }],
      },
    ],
  },
  // Student Routes
  {
    path: '/student',
    element: <ProtectedRoute allowedRoles={['student']} />,
    children: [
      {
        path: 'dashboard',
        element: <StudentLayout />,
        children: [{ index: true, element: <StudentDashboard /> }],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
