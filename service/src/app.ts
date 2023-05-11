import { router } from './routes/routes';
import express from 'express';
import 'dotenv/config';


const app = express();
app.use(express.json());
const { PORT } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Now we are online on ${PORT}`);
});