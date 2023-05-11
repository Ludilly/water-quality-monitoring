import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck';


const router = Router();

// router.get('/analysis', meucontroller);

router.post('/healthcheck', healthcheck);

export { router };