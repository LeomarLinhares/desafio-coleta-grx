import { Router } from "express";
import mainController from "../database/controllers/mainController";

const main = Router();

main.post("/", mainController.createAnswer);

export default main;
