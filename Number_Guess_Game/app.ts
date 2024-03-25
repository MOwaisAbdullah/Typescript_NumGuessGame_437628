#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 11);

const answer = await inquirer.prompt([{
    name:"userguessnum",
    type:"number",
    message:"Please guess a number between 1 - 10:",

}]);

if(answer.userguessnum === randomnumber){
    console.log("Congratulation you guessed the right number.");}
    else{console.log("You guessed wrong number.");
    }

    

