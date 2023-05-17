import { Request, Response } from 'express';
import { userData } from '../../data';
import { statusResponse } from '../../utils/statusCode';

const md5 = require('md5');
const JWT = require('jsonwebtoken');

const JWTCONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
interface User {
  email: string;
  name: string;
}

export const login = async (req: Request, res: Response) => {
  const { JWTSECRET } = process.env;

  try {
    const { email, password } = req.body;

    if (userData.password !== md5(password)) throw new Error('Credenciais inválidas');
    if (userData.email !== email) throw new Error('Credenciais inválidas');
    if (!userData) throw new Error('Usuário não encontrado');

    const userToken: User = {
      email: userData.email,
      name: userData.name,
    };
    const token: string = JWT.sign({ data: userToken }, JWTSECRET, JWTCONFIG);

    return res.status(statusResponse.OK).json({ email, token });
  } catch (e: any) {
    return res.status(statusResponse.NOT_FOUND).json({
      message: e.message,
    });
  }
};
