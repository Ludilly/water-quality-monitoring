import SampleAnalyzedModel from '../../../model';
import { connectDatabase, disconnectDatabase } from '../../../model/database';

export const getAllAnalysis = async () => {
  try {
    await connectDatabase();

    const result = await SampleAnalyzedModel.find();
    return result;
  } catch (error: any) {
    console.log(error);
    return error.message;
  } finally {
    await disconnectDatabase();
  }
};
