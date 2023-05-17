import server from 'express';
import { getAllAnalysis } from '../../services/getAllAnalysis';
import { statusResponse } from '../../utils/statusCode';

export const getAllAnalysisController = async (_req: server.Request, res: server.Response) => {
  try {
    const result = await getAllAnalysis();

    return res.status(statusResponse.OK).json({ result });
  } catch (error: any) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });
  }
};
