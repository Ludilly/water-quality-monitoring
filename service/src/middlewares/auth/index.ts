import { Request, Response, NextFunction } from 'express';
import { statusResponse } from '../../utils/statusCode';

const JWT = require('jsonwebtoken');

export interface CustomRequest extends Request {
  token: string;
}

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const { JWTSECRET } = process.env;

  const { token } = req.headers;

  if (!token) {
    return res.status(statusResponse.UNAUTHORIZED).json({ message: 'Token não autorizado' });
  }

  try {
    const data = JWT.verify(token, JWTSECRET);

    (req as CustomRequest).token = data;

    next();

  } catch (error) {
    console.error(error);
  }
};