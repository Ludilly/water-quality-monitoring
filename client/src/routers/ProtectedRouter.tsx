// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// // import { useAuth } from '../hooks/useAuth';

// interface ProtectedRouteProps {
//   children: JSX.Element;
// }

// export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//   const { authData } = useAuth();
//   if (!authData) {
//     return <Navigate to="/" />
//     toast.error('Tempo de sessão expirado');
//   }
//   return children;
// };