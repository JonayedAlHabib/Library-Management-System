import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/admin/Dashboard';
import AdminBooks from './pages/admin/Books';
import UserDashboard from './pages/user/Dashboard';
import UserBooks from './pages/user/Books';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/books" element={<AdminBooks />} />
      
      {/* User */}
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/books" element={<UserBooks />} />
    </Routes>
  );
}