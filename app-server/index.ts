import express from 'express';

import { faker } from '@faker-js/faker';

import { seedFakeUser } from './seeds';

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello world!').end();
});

app.get('/users', (req, res) => {
  res.json({
    users: seedFakeUser(10000),
  });
});

export { app };
