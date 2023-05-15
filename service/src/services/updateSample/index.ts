const { ObjectId } = require('mongodb');
import { connectDatabase, disconnectDatabase } from "../../../model/database";
import SampleAnalyzedModel from '../../../model';
import { AGENTS_LIMITS } from "../../enum";

type UpdateData = {
  id: String;
  agente: any;
  valor: String;
  cidade: String;
  estado: String;
  pontoDeColeta: String;
}

export const updateSampleById = async ({ id, agente, valor, cidade, estado, pontoDeColeta }: UpdateData) => {
  try {
    await connectDatabase();
    // informar no front pro usuário colocar o valor em ml com alerts e placeholders
    await SampleAnalyzedModel.findOne({_id:ObjectId(id)});
    const updateAnalysisById = await SampleAnalyzedModel
      .updateOne({ $set: { agente, valor, cidade, estado, pontoDeColeta, limiteMaximo: AGENTS_LIMITS[agente] } });
    return updateAnalysisById;

  } catch (error) {
    throw error
  } finally {
    await disconnectDatabase();
  }
}