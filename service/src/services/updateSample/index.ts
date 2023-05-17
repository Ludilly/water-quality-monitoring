import { connectDatabase, disconnectDatabase } from '../../../model/database';
import SampleAnalyzedModel from '../../../model';
import { AGENTS_LIMITS } from '../../enum';

const { ObjectId } = require('mongodb');

type UpdateData = {
  id: String;
  agente: any;
  valor: String;
  cidade: String;
  estado: String;
  pontoDeColeta: String;
}

export const updateSampleById = async ({
  id, agente, valor, cidade, estado, pontoDeColeta,
}: UpdateData) => {
  try {
    await connectDatabase();
    await SampleAnalyzedModel.findOne({ _id: ObjectId(id) });
    const updateAnalysisById = await SampleAnalyzedModel
      .updateOne({
        $set: {
          agente, valor, cidade, estado, pontoDeColeta, limiteMaximo: AGENTS_LIMITS[agente],
        },
      });
    return updateAnalysisById;
  } catch (error) {
    console.error(error);
  } finally {
    await disconnectDatabase();
  }
};
