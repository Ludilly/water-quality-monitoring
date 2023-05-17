import express from 'express';
import 'dotenv/config';
import { router } from './routes/routes';

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Now we are online on ${PORT}`);
});
