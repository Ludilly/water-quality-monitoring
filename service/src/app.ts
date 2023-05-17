import express from 'express';
const cors = require('cors');
import 'dotenv/config';
import { router } from './routes/routes';
import { authorization } from './middlewares/auth';


const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Now we are online on ${PORT}`);
});