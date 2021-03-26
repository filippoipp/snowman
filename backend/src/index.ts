
import 'reflect-metadata';
import 'dotenv/config';
import './database/connect';

import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000, () => {
  console.log('🚀 Server started on port 3000!');
});