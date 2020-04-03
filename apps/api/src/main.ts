import { API_URL, ApiResponse } from '@nx-first/api-interface';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
