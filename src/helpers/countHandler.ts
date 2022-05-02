import { IAnswer, IAnswerWithCount } from "../interfaces/IAnswer";

export default (answer: IAnswer): IAnswerWithCount => {
  const answersWithCount: IAnswerWithCount = {
    ...answer,
    count: {
      negativeQuantity: 0,
      positiveQuantity: 0,
      neutralQuantity: 0,
    }
  };

  answer.question_1 === 'Sim' ? answersWithCount.count.positiveQuantity++ : answersWithCount.count.negativeQuantity++;
  answer.question_2 === 'Sim' ? answersWithCount.count.positiveQuantity++ : answersWithCount.count.negativeQuantity++;

  if (answer.question_3 === 'Sim') {
    answersWithCount.count.positiveQuantity++;
  } else if (answer.question_3 === 'Não') {
    answersWithCount.count.negativeQuantity++;
  } else if (answer.question_3 === 'Não sei') {
    answersWithCount.count.neutralQuantity++;
  } else if (answer.question_3 === 'Agora!!') {
    answersWithCount.count.positiveQuantity += 2;
  }

  return answersWithCount;
};
