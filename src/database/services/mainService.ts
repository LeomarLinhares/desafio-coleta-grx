import countHandler from "../../helpers/countHandler";
import {
  IAnswer,
  IAnswerResponse,
  IAnswerWithCount,
} from "../../interfaces/IAnswer";
import IMessage from "../../interfaces/IMessage";
import MainModel from "../models/mainModel";
import StatusCode from "../messages/statusCode";

class MainService {
  public async create(answer: IAnswer): Promise<IMessage> {
    try {
      const answerWithCount: IAnswerWithCount = countHandler(answer);
      const allAnswersBuffer: Buffer = await MainModel.read();
      const allAnswers: IAnswerResponse[] = JSON.parse(
        allAnswersBuffer.toString()
      );
      const responseBuffer = await MainModel.create(
        JSON.stringify([
          ...allAnswers,
          {
            id: allAnswers.length + 1,
            ...answerWithCount,
          },
        ])
      );

      const response = JSON.parse(responseBuffer.toString());

      return {
        statusCode: StatusCode.CREATED,
        message: response[response.length - 1],
      };
    } catch (error) {
      console.warn(error);
      return {
        statusCode: StatusCode.INTERNAL_SERVER_ERROR,
        message: "Erro ao acessar arquivo de dados",
      };
    }
  }
}

export default new MainService();
