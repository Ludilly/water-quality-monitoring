import server from 'express';
import { getAnalysisByAgent, getAnalysisById } from '../../services/getByParams';
import { statusResponse } from '../../utils/statusCode';

export const getAnalysisByIdController = async(req: server.Request, res: server.Response) => {
  try {
    const { id } = req.params;
    const result = await getAnalysisById(id);

    return res.status(statusResponse.OK).json({ result });
  } catch (error) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });
  };
};


export const getAnalysisByAgentController = async(req: server.Request, res: server.Response) => {
  try {
    const { agente } = req.params;
    
    const result = await getAnalysisByAgent(agente);

    return res.status(statusResponse.OK).json({ result });
  } catch (error) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });
  };
};
