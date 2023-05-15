import { connectDatabase, disconnectDatabase } from "../../../model/database";
import SampleAnalyzedModel from '../../../model';
import { AGENTS_LIMITS } from "../../enum";

export const createSampleAnalysis = async (request: any) => {
  const data = request;
  try {
    await connectDatabase();
    // informar no front pro usuário colocar o valor em ml com alerts e placeholders

    await SampleAnalyzedModel.create({
      ...data,
      limiteMaximo: data.limiteMaximo = AGENTS_LIMITS[data.agente],
      status: data.valor > AGENTS_LIMITS[data.agente] ?
        'Valor acima da média permitida' : 'Valor dentro da média'
    });

  } catch (error) {
    throw error
  } finally {
    await disconnectDatabase();
  }
}