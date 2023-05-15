import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import dataSource from './src/configs/dbconfig';
import route from './src/routes';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.listen(PORT, () => {
  try {
    dataSource
      .initialize()
      .then(() => {
        console.log('Connected to database');
      })
      .then(() => {
        console.log(`App is listening on port ${PORT}`);
      });
  } catch (err) {
    console.log(err);
  }
});
