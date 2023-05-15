import server from 'express';
import { getAnalysisByAgent, getAnalysisByPontoDeColeta, getAnalysisByStatus } from '../../services/getByParams';
import { statusResponse } from '../../utils/statusCode';
import { AGENTS_NAME } from '../../enum';


export const getAnalysisByAgentController = async(req: server.Request, res: server.Response) => {
  try {
    const { agente } = req.params;
    
    const result = await getAnalysisByAgent(agente);

    return res.status(statusResponse.OK).json({ result });
  } catch (error) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });

  }
}


export const getAnalysisByStatusController = async(req: server.Request, res: server.Response) => {
  try {
    const { status } = req.params;
    const result = await getAnalysisByStatus(status);

    return res.status(statusResponse.OK).json({ result });
  } catch (error) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });

  }
}


export const getAnalysisByPontoDeColetaController = async(req: server.Request, res: server.Response) => {
  try {
    const { pontoDeColeta } = req.params;
    const result = await getAnalysisByPontoDeColeta(pontoDeColeta);

    return res.status(statusResponse.OK).json({ result });
  } catch (error) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });

  }
}
