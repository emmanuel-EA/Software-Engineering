// What are the results of these expressions?
// using console log 
"" + 1 + 0          // 10
"" - 1 + 0          // -1
true + false        // 1
!true               //false
6 / "3"             // 2
"2" * "3"           // 6
4 + 5 + "px"        // 9px
"$" + 4 + 5         // $45
"4" - 2             // 2
"4px" - 2           // NaN
" -9 " + 5          //  -9  5
" -9 " - 5          // -14
null + 1            // 1
undefined + 1       // NaN
undefined == null   // true
undefined === null  // false
" \t \n" - 2        // -2

// Which of the below are not giving the right answer? 
//Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
// Addition sign + concatenates two strings
// subtraction, multiplication and Division signs 
//converts strings to numbers
let addition = three + four             //34 '+' sign Concatenates
let multiplication = three * four       //12 '*' sign multiplies after the conversion
let division = three / four             //0.75 '/' sign divides after the conversion
let subtraction = three - four          // -1 '-' sign substracts after the conversion
let lessThan1 = three < four            // True because 3 comes before 4 alphabetically
let lessThan2 = thirty < four           // False because 30 comes before 4 alphabetically

//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')       //zero equivalent to false, doesn't print
if ("0") console.log('#2 zero is true')     //strings equivalent to true, prints
if (null) console.log('null is true')       //null equivalent to false, doesn't print
if (-1) console.log('negative is true')     //non-zero number equivalent to true, prints
if (1) console.log('positive is true')      //non-zero number equivalent to true, prints

//Rewrite this if using the ternary/conditional operator '?'. 
//Test it with different values for aand b. What does the ‘+=’ do?
let a = 2, b = 3;
let result = `${a} + ${b} is `;         // '+=' adds on to the existing value
result += (a + b < 10) ? 'less than 10' : 'greater than 10';


//Rewrite the following function using: a) function expression syntax, and b) arrow function
//syntax. Test each version to make sure they work the same.
function getGreeting(name) {
    return 'Hello ' + name + '!';
}
//Function Espression syntax:
const getGreetingFunctionExpression = function(name){
    return 'Hello' + name + '!';    
}

//Arrow Function Syntax:
const getGreetingArrow = (name) => 'Hello' + name + '!';

console.log(getGreeting('Samwise Gamgee'))
console.log(getGreetingFunctionExpression('Samwise Gamgee'))
console.log(getGreetingArrow('Samwise Gamgee'))

//Complete the inigo object by adding a lastName property and including it in the
//greeting.
//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
//prints his famous catch phrase to the console. HINT: see
//https://www.imdb.com/title/tt0093779/characters/nm0001597.
//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastname: 'Emmanuel',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}, ${this.lastname}. `;
         console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ? 
    'Nice to meet you too.'
    
}
console.log(inigo.greeting(westley))
console.log(inigo.greeting(rugen))

//The following object represents a basketball game and keeps track of the score as the
//game progresses.
//a) Modify each of the methods so that they can be ‘chained’ together and the last line of
//the example code works
//b) Add a new method to print the full time final score
//c) Add a new object property to keep track of the number of fouls and a method to
//increment it, similar but separate to the score. Include the foul count in the half time and
//full time console messages
//d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).');
        return this;
    },
    fullTime() {
        console.log('Final score is '+this.score+' ('+this.fouls+' fouls).');
        return this;
    }
}
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().foul().freeThrow().freeThrow().basket().threePointer().halfTime().
    basket().basket().foul().freeThrow().threePointer().fullTime();

//The object below represents a single city.
//a) Write a function that takes an object as an argument and uses a for...in loop to access
//and print to the console each of those object properties and their values. Test it using
//the sydney object below.
//b) Create a new object for a different city with different properties and call your function
//again with the new object.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const Perth = {
    name: 'Perth',
    population: '4.64 million',
    state: 'WESTERN AUSTRALIA',
    elevation: '31 m',
    area: '9,992 km2'
}
function printCityProps(cityObj) {
    for (cityProp in cityObj) {
    console.log(cityProp + ' = ' + cityObj[cityProp])
    }
}
printCityProps(sydney)
printCityProps(Perth)

//Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport
//values to it (using push and unshift)
//b) Create a new dog2 variable equal to dog1 and give it a new value
//c) Create a new cat2 variable equal to cat1 and change its name property
//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//changed? Why?
//e) Change the way the moreSports and cat2 variables are created to ensure the
//originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Rugby')

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Bluey';

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat2.name = 'Snuggles'

console.log(teamSports) //has changed - because arrays are stored by reference, and
//moreSports points to the same memory location
console.log(dog1) //no change - because primitives like strings are stored by value, and
//the values are different
console.log(cat1) //has changed - because objects are stored by reference, and cat2
//points to the same memory location

let moreSports2 = [...teamSports]
moreSports2.push('Netball')
console.log(teamSports) //doesn't include Netball because moreSports2 was created using a
//shallow clone
let cat3 = {...cat1}
cat3.name = 'Luna'
console.log(cat1) // still set to Snuggles because cat3 was created using a clone that
//references a different memory location

//The following constructor function creates a new Person object with the given name and age values.
//a) Create a new person using the constructor function and store it in a variable
//b) Create a second person using different name and age values and store it in a separate variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >= 16
}
let person1 = new Person('John', 30)
let person2 = new Person('Jane', 24)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
    return this.age >= 16;
    }
}
let person3 = new Person('James', 10)

console.log(person1)
console.log(person2)
console.log(person3)

if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and is old enough to drive')
if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough to drive')
if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and is old enough to drive')