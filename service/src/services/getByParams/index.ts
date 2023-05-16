import SampleAnalyzedModel from '../../../model';
import { connectDatabase, disconnectDatabase } from "../../../model/database";

export const getAnalysisById = async (id: string) => {
  try {
    await connectDatabase();

    const analysis = await SampleAnalyzedModel.findById(id);

    if (!analysis) {
      throw new Error('Análise não encontrada');
    }

    return analysis
    
  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
}


export const getAnalysisByAgent = async (agente: string) => {
  try {
    await connectDatabase();
    return await SampleAnalyzedModel.find({ agente: agente });

  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
}

export const getAnalysisByStatus = async (status: string) => {
  try {
    await connectDatabase();
    return await SampleAnalyzedModel.find({ status: status });

  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
}

export const getAnalysisByPontoDeColeta = async (pontoDeColeta: string) => {
  try {
    await connectDatabase();
    return await SampleAnalyzedModel.findOne({ pontoDeColeta: pontoDeColeta });

  } catch (error: any) {
    return error.message;
  } finally {
    await disconnectDatabase();
  }
}