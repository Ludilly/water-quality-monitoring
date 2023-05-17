import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck';
import { login } from '../controllers/auth';
import { createSample } from '../controllers/createSample';
import { getAllAnalysisController } from '../controllers/getAllSample';
import { updateSampleContorller } from '../controllers/updateSample';
import { getAnalysisByAgentController, getAnalysisByIdController } from '../controllers/getByParams';
import { authorization } from '../middlewares/auth';

const router = Router();

router.post('/login', login);
router.post('/createSample', authorization, createSample);

router.get('/analysis', authorization, getAllAnalysisController);
router.get('/agent/:agent', authorization, getAnalysisByAgentController);
router.get('/analysis/:id', authorization, getAnalysisByIdController);

router.put('/updateSamples/:id', authorization, updateSampleContorller);

router.post('/healthcheck', healthcheck);

export { router };
