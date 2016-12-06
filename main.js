/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(x, y) {
    if (x === y) {
        return "Inputs are identical";
    } else if (x < y) {
        return x + " is less than " + y;
    } else {
        return y + " is less than " + y;
    }
};

document.getElementById("q1").innerHTML = minimum(5, 7);

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(x, y, z) {
    if (x < y && x < z) {
        return x + " is the lowest number";
    } else if (y < x && y < z) {
        return y + " is the lowest number";
    } else {
        return z + " is the lowest number";
    }
};

document.getElementById("q2").innerHTML = minimum3(4, -17, 38);

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array) {
    var mySum = 0;
    for (var i = 0; i < array.length; i++) {
        mySum += array[i];
    }
    return mySum;
};

document.getElementById("q3").innerHTML = sum([1, 2, 3, 4]);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(array) {
    var myProduct = 1;
    for (var i = 0; i < array.length; i++) {
        myProduct *= array[i];
    }
    return myProduct;
};

document.getElementById("q4").innerHTML = multiply([1, 2, 3, 4]);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters (table, cup, knife, glass), should leave (window, barstool, charger, outlet)

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (words[i].length < 6) {
            words.splice(i, 1)
        }
    }
    return words.join(", ");
}

document.getElementById("q5").innerHTML = filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
//    F to C: Deduct 32, then multiply by 5, then divide by 9

var celsius = prompt("Please input degrees Celsius");

function toFahrenheit(celsius) {
    var fahrenheit = parseFloat(celsius) * (9 / 5) + 32;
    return fahrenheit;
};

function toCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
};

document.getElementById("q6").innerHTML = toFahrenheit(celsius);

// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

var userTemp = prompt("Please choose F to C or C to F.");

if (userTemp === "F to C") {
    var fInput = prompt("Please input degrees Fahrenheit")
    var fOutput = fInput + " degrees F equals " + Math.round(toCelsius(fInput)) + " degrees C";
    document.getElementById("q7").innerHTML = fOutput;
}

if (userTemp === "C to F") {
    var cInput = prompt("Please input degrees Celsius")
    var cOutput = cInput + " degrees C equals " + Math.round(toFahrenheit(cInput)) + " degrees F";
    document.getElementById("q7").innerHTML = cOutput;
}

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
    var counter = 0
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            counter++;
        }
    }
    return "The letter B occurs " + counter + " times in " + string;
}

document.getElementById("q8").innerHTML = countBs("BIG brown boxes are Boxy");

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!

document.getElementById("q9").innerHTML = "Website link does not work";

// ADVANCED TRACK
// A. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countLetter(string, letter) {
    var counter = 0
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            counter++;
        }
    }
    return "The letter " + letter + " occurs " + counter + " times in " + string;
}

document.getElementById("qa").innerHTML = countLetter("BIG brown boxes are Boxy", "r");

// B. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "o") {
            string = string.split("");
            string[i] = "0";
            string = string.join("")
        }
    }
    return string;
}

document.getElementById("qb").innerHTML = ohZero("This string has letters replaced by numbers: orange octopus looks ominous");

// C. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function bottlesOfBeer() {
    var song = "";
    for (var i = 99; i > 0; i--) {
        if (i !== 1 && i !== 2) {
            song += i + " bottles of beer on the wall, " + i + " bottles of beer... take one down, pass it around, " + (i - 1) + " bottles of beer on the wall... ";
        } else if (i === 2) {
            song += i + " bottles of beer on the wall, " + i + " bottles of beer... take one down, pass it around, " + (i - 1) + " bottle of beer on the wall... ";
        } else {
            song += i + " bottle of beer on the wall, " + i + " bottle of beer... take one down, pass it around, " + (i - 1) + " bottles of beer on the wall... ";
        }
    }
    return song;
};

document.getElementById("qc").innerHTML = bottlesOfBeer();

// D. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

function guessingGame() {
    var randomNumber = Math.round(Math.random() * 3);
    var userNumber = prompt("Pick an number between 0 and 3");
    while (userNumber > randomNumber) {
        userNumber = prompt("Your guess is too high, try again!");
    }
    while (userNumber < randomNumber) {
        userNumber = prompt("Your guess is too low, try again!");
    }
    alert("You guessed the correct number!");
};

document.getElementById("qd").innerHTML = guessingGame();
