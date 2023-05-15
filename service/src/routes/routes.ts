import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck';
import { login } from '../controllers/auth';
import { createSample } from '../controllers/createSample';
import { getAllAnalysisController } from '../controllers/getAllSample';
import { updateSampleContorller } from '../controllers/updateSample';
import { getAnalysisByAgentController, getAnalysisByPontoDeColetaController, getAnalysisByStatusController } from '../controllers/getByParams';

const router = Router();

router.post('/login', login);
router.post('/createSample', createSample);
router.get('/analysis', getAllAnalysisController);
router.get('/analysis/:agent', getAnalysisByAgentController);
router.get('/analysis/:status', getAnalysisByStatusController);
router.get('/analysis/:pontoDeColeta', getAnalysisByPontoDeColetaController);
router.put('/updateSamples/:id', updateSampleContorller);

router.post('/healthcheck', healthcheck);

export { router };