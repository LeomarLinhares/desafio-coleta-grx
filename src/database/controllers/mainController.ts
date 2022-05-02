import MainService from '../services/mainService';
import { Request, Response } from 'express';

class MainController {
  public async createAnswer (req: Request, res: Response): Promise<void> {
    const response = await MainService.create(req.body);
    res.status(response.statusCode).send(response.message);
  }
}

export default new MainController();
