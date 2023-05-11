import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import  Login  from './pages/Login';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          // <ProtectedRoute>
            <Home />
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};