import server from 'express';
import { statusResponse } from '../utils/statusCode';

export const healthcheck = async (request: server.Request, response: server.Response) => {
  try {
    const healthcheckResponse = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };

    return response.status(statusResponse.OK).json({ healthcheckResponse });
  } catch (error: any) {
    return response.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });
  }
};