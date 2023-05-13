import server from 'express';
import {createSampleAnalysis} from '../../services/createSample';

export const createSample = async (req: server.Request, res: server.Response) => {
  try {
    const result = await createSampleAnalysis(req.body);

    return res.status(201).json({ result });
  } catch (error: any) {
    return res.status(500).json({ message: 'Internal server Error' });
  }
};