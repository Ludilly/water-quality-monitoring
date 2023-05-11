import server from 'express';

export const healthcheck = async (request: server.Request, response: server.Response) => {
  try {
    const healthcheckResponse = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };

    return response.status(200).json({ healthcheckResponse });
  } catch (error: any) {
    return response.status(500).json({ message: 'Internal server Error' });
  }
};