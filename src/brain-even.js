import { getRandomInt } from "./helper";
const isEvenGame = () => {

    const isEven = (num) => num % 2 === 0;
    const getRandomNum = getRandomInt();

    const question = `Question: ${getRandomNum}`;

    const correctAnswer = isEven(getRandomNum)? 'yes' : 'no';

    return {
      question, correctAnswer
    }
};

export default isEvenGame