import SampleAnalyzedModel from '../../../model';
import { connectDatabase, disconnectDatabase } from '../../../model/database';

export const getAnalysisById = async (id: string) => {
  try {
    await connectDatabase();

    const analysis = await SampleAnalyzedModel.findById(id);

    if (!analysis) {
      throw new Error('Análise não encontrada');
    }

    return analysis;
  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
};

export const getAnalysisByAgent = async (agent: string) => {
  try {
    await connectDatabase();

    const filteredAnalysis = await SampleAnalyzedModel.find({ agente: agent });

    return filteredAnalysis;
  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
};
