import { Router } from "express";
import mainController from "../database/controllers/mainController";
import Validate from "../database/middlewares/validateAnswers";

const main = Router();

main
  .post
  (
    "/",
    Validate.ifAnswersExist,
    mainController.createAnswer,
  )
  .get("/", mainController.getAnswers);

export default main;
