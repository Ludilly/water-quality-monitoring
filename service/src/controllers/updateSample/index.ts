import server from 'express';
import { statusResponse } from '../../utils/statusCode';
import { updateSampleById } from '../../services/updateSample';

export const updateSampleContorller = async (req: server.Request, res: server.Response) => {
  const { id } = req.params;
  const {
    agente, valor, cidade, estado, pontoDeColeta,
  } = req.body;
  try {
    const result = await updateSampleById({
      id,
      agente,
      valor,
      cidade,
      estado,
      pontoDeColeta,
    });

    return res.status(statusResponse.OK).json({ result });
  } catch (error: any) {
    return res.status(statusResponse.INTERNAL_SERVER_ERROR).json({ message: 'Internal server Error' });
  }
};
