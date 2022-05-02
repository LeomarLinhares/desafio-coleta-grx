export interface IAnswer {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
}

export interface IAnswerCount {
  positiveQuantity: number;
  negativeQuantity: number;
  neutralQuantity: number;
}

export interface IAnswerWithCount extends IAnswer {
  count: IAnswerCount;
}

export interface IAnswerResponse extends IAnswerWithCount {
  id: number;
}