import { Request, Response, NextFunction } from 'express';
import StatusCode from '../messages/statusCode';

class Validate {
  ifAnswersExist(req: Request, res: Response, next: NextFunction): Response | void {
    const { question_1, question_2, question_3, question_4 } = req.body;
    if (!question_1 || !question_2 || !question_3 || !question_4) {
      return res.status(StatusCode.BAD_REQUEST).json({
        message: 'Todas as questões devem ser preenchidas',
      });
    }

    next();
  }
}

export default new Validate();
