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

export const updateSampleById = async (data: UpdateData) => {
  try {
    await connectDatabase();
    await SampleAnalyzedModel.findOne({ _id: ObjectId(data.id) });

    const updateAnalysisById = await SampleAnalyzedModel
      .updateOne({
        $set: {
          ...data,
          status: data.valor > AGENTS_LIMITS[data.agente]
            ? 'Valor acima da média permitida' : 'Valor dentro da média',
        },
      });
    return updateAnalysisById;
  } catch (error) {
    console.error(error);
  } finally {
    await disconnectDatabase();
  }
};
