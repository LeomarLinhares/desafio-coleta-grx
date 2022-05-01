import MainService from '../services/mainService';
import { Request, Response } from 'express';

class MainController {
  public async createAnswer (req: Request, res: Response): Promise<void> {
    const response = await MainService.createAnswer(req.body);
    res.status(200).send(response);
  }
}

export default new MainController();
