// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useContext, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LoginData } from '../@types';

// interface AuthProviderProps {
//   children: JSX.Element;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [authData, setAuthData] = useState({email: '', password: ''});
//   const navigate = useNavigate();

//   const login = async ({ email, password }: LoginData) => {
//     await axios
//       .post('http://localhost:3333/auth', {
//         email,
//         password,
//       })
//       .then((response) => {
//         setAuthData({
//           email,
//           token: response.data.token,
//         });
//         navigate('/home');
//       })
//       .catch((error) => {
//         if (axios.isAxiosError(error)) {
//           toast.error('Ocorreu um erro ao fazer login');
//         }
//       });
//   };

//   const logout = () => {
//     setAuthData(null);
//     navigate('/', { replace: true });
//   };

//   const value = useMemo(
//     () => ({
//       authData,
//       login,
//       logout,
//     }),
//     [authData],
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };