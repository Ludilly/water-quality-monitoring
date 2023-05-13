import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck';
import { login } from '../controllers/auth';
import { createSample } from '../controllers/createSample';

const router = Router();

// router.get('/analysis', meucontroller);
router.post('/login', login);
router.post('/createSample', createSample);

router.post('/healthcheck', healthcheck);

export { router };