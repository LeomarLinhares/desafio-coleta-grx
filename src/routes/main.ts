import { Router } from 'express';

const main = Router();

main
  .post(
    '/',
    mainController.createAnswer
  );

export default main;
