import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/admin/Dashboard';
import AdminBooks from './pages/admin/Books';
import AdminUsers from "./pages/admin/User";
import AdminFines from './pages/admin/Fines';
import UserDashboard from './pages/user/Dashboard';
import UserBooks from './pages/user/Books';
import UserEditProfile from './pages/user/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Student Routes */}
      <Route path="/user/dashboard" element={
        <ProtectedRoute allowedRoles={['user']}>
          <UserDashboard />
        </ProtectedRoute>
      } />

      <Route path="/user/books" element={
        <ProtectedRoute allowedRoles={['user']}>
          <UserBooks />
        </ProtectedRoute>
      } />

      <Route path="/user/profile" element={
        <ProtectedRoute allowedRoles={['user']}>
          <UserEditProfile />
        </ProtectedRoute>
      } />

      {/* Protected Admin Routes */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </ProtectedRoute>
      } />

      <Route path="/admin/books" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminBooks />
        </ProtectedRoute>
      } />

      <Route path="/admin/users" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminUsers />
        </ProtectedRoute>
      } />

      <Route path="/admin/fines" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminFines />
        </ProtectedRoute>
      } />
    </Routes>
  );
}