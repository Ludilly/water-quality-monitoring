import { Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import  Login  from './pages/Login';

export const App = () => {
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