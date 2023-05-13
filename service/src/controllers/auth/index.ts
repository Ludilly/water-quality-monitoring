import { Request, Response } from 'express';
const md5 = require('md5');
const JWT = require('jsonwebtoken');
import { userData } from "../../data";
const jwtKey = '624e771f-f59d-4a24-8431-d92d119f0556';
import { statusResponse } from '../../utils/statusCode';

const JWTCONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

interface User {
  email: string;
  name: string;
}

interface TokenData {
  data: User;
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (userData.password !== md5(password)) throw new Error('Credenciais inválidas');
    if (userData.email !== email) throw new Error('Credenciais inválidas');
    if (!userData) throw new Error('Usuário não encontrado');

    const userToken: User = {
      email: userData.email,
      name: userData.name,
    };
    const token: string = JWT.sign({ data: userToken }, jwtKey, JWTCONFIG);

    return res.status(statusResponse.OK).json({ email, token });
  } catch (e: any) {
    return res.status(statusResponse.NOT_FOUND).json({
      message: e.message,
    });
  }
};