//In this file I'll write my Javascript so I can remember it later and learn by doing this

var number = 1;

function add(num1, num2){
    let sum = num1 + num2;
}

console.log(add(number, 2));


//Functions in Javascript
//they can be assigned to variables
//passed as a property to other functions as an argument
//can return other functions

var doMath = function(num1, num2){
    var result = num1 + num2;
    return result;
}

var myResult = doMath(2,3);

/**********/

function message(){
    return "It's. the information age ";
}

function displayMessage(msgFunction, person){
    console.log(msgFunction() + person);
}

displayMessage(message, "Tomislav"); // -> It's the information age Tomislav

//NPM(Node packet manager) tool used to download all kinds of libreries and frameworks
//Let’s go over the first line since that is what you need to do to get this to work.
//Node Package Manger commands start with npm.
//To install a module, tell npm the name of the module you want to install.
//If you want that module to work anywhere on your computer, add -g.

/*npm install -g http-server*/


    