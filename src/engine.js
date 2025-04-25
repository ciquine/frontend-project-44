import readlineSync from 'readline-sync';
import games from './game-library.js'

export default (game)=>{
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    const {description, QA} = games[game];
    const {question, correctAnswer} = QA;
    // console.log('Answer "yes" if the number is even, otherwise answer "no".')
}