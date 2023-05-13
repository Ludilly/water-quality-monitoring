import { Document, model, Schema } from 'mongoose';

interface ISampleAnalyzed extends Document {
  agente: string;
  pontoDeColeta: string;
  cidade: string;
  estado: string;
  valor: number;
  limiteMaximo: number;
  status: string;
}

const SampleAnalyzed = new Schema({
  agente: { type: String, required: true },
  pontoDeColeta: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  valor: { type: String, required: true },
  limiteMaximo: { type: String, required: true },
  status: { type: String, required: true },
});

export default model<ISampleAnalyzed>('SampleAnalyzed ', SampleAnalyzed );
