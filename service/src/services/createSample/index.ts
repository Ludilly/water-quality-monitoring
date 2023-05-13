import { connectDatabase, disconnectDatabase } from "../../../model/database";
import SampleAnalyzedModel from '../../../model';
import { AGENTES } from "../../enum";

export const createSampleAnalysis = async (request: any) => {
  const data = request;
  try {
    await connectDatabase();
  
    // informar no front pro usuário colocar o valor em ml com alerts e placeholders

    data.limiteMaximo = AGENTES[data.agente];

    await SampleAnalyzedModel.create({
      ...data,
      status: data.valor > AGENTES[data.agente] ?
        'Valor acima da média permitida' : 'Valor dentro da média'
    });

  } catch (error) {
    console.log(error);
    throw error
  } finally {
    await disconnectDatabase();
  }
}