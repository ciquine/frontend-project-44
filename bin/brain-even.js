#!/usr/bin/env mode
import readlineSync from 'readline-sync'
import game from 

const isEvenGame = () => {
  const name = game ();
  let sum = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  do {
    const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
    const isEven = (num) => num % 2 === 0;
    const getRandomNum = getRandomInt();
    console.log(`Question: ${getRandomNum}`);

    const correctAnswer = isEven(getRandomNum)? 'yes' : 'no';
    

    }while(true)
}
