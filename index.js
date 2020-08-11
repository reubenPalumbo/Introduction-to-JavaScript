/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 20;
if (votingAge >= 18) {
  // console.log("Able to vote");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let taskB1 = 10;
let taskB2 = 20;
if (taskB2 === 20) {
  taskB1 = 30;
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number("1999");

//Task d: Write a function to multiply a*b
function add(num1, num2) {
  return num1 * num2;
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

let myAge = 20;
function dogYears(myAge) {
  return myAge * 7;
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeed(lb, age) {
  if (age >= 1) {
    if (lb <= 5) {
      return lb * 0.05;
    } else if (lb <= 10) {
      return lb * 0.04;
    } else if (lb <= 15) {
      return lb * 0.03;
    } else {
      return lb * 0.02;
    }
  } else {
    if (age <= 0.4) {
      return lb * 0.1;
    } else if (age <= 0.7) {
      return lb * 0.05;
    } else {
      return lb * 0.04;
    }
  }
}
// console.log(dogFeed(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const choiceCPU = Math.random();
function compChoice(numCompare) {
  if (numCompare < 0.33) {
    return 1; //"sissors"
  } else if (numCompare < 0.66) {
    return 2; //"rock"
  } else {
    return 3; //"paper"
  }
}
function playGame(choice) {
  let win;
  let numPick;
  let cpu = compChoice(choiceCPU);
  if (choice === "sissors") {
    numPick = 1;
  } else if (choice === "rock") {
    numPick = 2;
  } else {
    numPick = 3; //"paper"
  }

  if (cpu === numPick) {
    win = 2;
  } else if (cpu === 3 && numPick === 1) {
    win = 1;
  } else if (cpu === 2 && numPick === 3) {
    win = 1;
  } else if (cpu === 1 && numPick === 2) {
    win = 1;
  } else {
    win = 0;
  }

  if (win === 1) {
    console.log("You Win! :)");
    return;
  } else if (win === 0) {
    console.log("You Lose :(");
    return;
  } else {
    console.log("Its a Tie. :|");
    return;
  }
}

// playGame("rock");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function kmToMiles(km) {
  return km / 1.609;
}

function feetToCM(ft) {
  return ft * 30.48;
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(start) {
  for (let i = start; i > 0; i--) {
    console.log(
      i +
        " bottles of soda on the wall, " +
        i +
        " bottles of soda, take one down pass it around " +
        (i - 1) +
        " bottles of soda on the wall"
    );
  }
}

// annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be C
//60s should be D
//and anything below 60 should be F

function calcGrade(grade) {
  let result = null;
  if (grade >= 90) {
    result = "A";
  } else if (grade >= 80) {
    result = "B";
  } else if (grade >= 70) {
    result = "C";
  } else if (grade >= 60) {
    result = "D";
  } else {
    result = "F";
  }
  return "Your grade is: " + result;
}

console.log(calcGrade(92));
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
