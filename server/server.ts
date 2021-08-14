import * as express from 'express';
import { Application, Request, Response } from 'express';
import { loginUser } from './auth.root';
import { authenticate } from './db-data';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.post('/api/login', loginUser);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
