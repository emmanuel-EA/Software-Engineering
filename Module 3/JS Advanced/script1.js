//1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
//b) Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0)
//c) Modify makeCounter to take another argument incrementBy, which specifies how much
//each call to counter() should increase the counter value by.

function makeCounter() {
  let currentCount = 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1 - yes, it's independent since it restarts from 1
counter2(); // 2
function makeCounterB(startFrom) {
  let currentCount = startFrom;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter3 = makeCounterB(5);

counter3(); // 6
counter3(); // 7
counter3(); // 8

function makeCounterC(startFrom, incrementBy) {
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter4 = makeCounterC(10, 5);

counter4(); // 15
counter4(); // 20

//2. The following delayMsg function is intended to be used to delay printing a message until
//some time has passed.
//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.

//tests print #4, #3, #2, #1 because delayMsg doesn't use setTimeout and runs first,
//then the others according to their delays
const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay:
${msg}`);
setTimeout(() => {
  delayMsg("Test 1");
}, 1000);
setTimeout(() => {
  delayMsg("Test 2");
}, 100);
setTimeout(() => {
  delayMsg("Test 3");
}, 50);
setTimeout(() => {
  delayMsg("Test 4");
}, 10);
delayMsg("Test 5: Not delayed at all");
let sixthTimerRef = setTimeout(delayMsg, 10 * 1000, "Test 6: Longest delay");
clearTimeout(sixthTimerRef);

//3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
//similar requests until there's a brief pause, then only executing the most recent of those
//requests. See https://www.techtarget.com/whatis/definition/debouncing
//It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
//requests being initiated if a user clicks repeatedly on a button.
//Using the following code to test and start with:
//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
//suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
//pause, the most recent call to func should be executed and any others ignored.
//b) Extend the debounce decorator function to take a second argument ms, which defines the
//length of the period of inactivity instead of hardcoding to 1000ms
//c) Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement.

function debounce(func) {
  //answer for a)
  let timeout;

  return function () {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout); //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, 1000);
  };
}

function debounceB(func, ms) {
  //answer for b)
  let timeout;

  return function () {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout); //reset the timer id for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms);
  };
}
function printMeC(msg) {
  console.log(`printing debounced message c: ${msg}`);
}
printMeC = debounceC(printMeC, 1200);

setTimeout(printMeC, 100, "msg #1");
setTimeout(printMeC, 200, "msg #2");
setTimeout(printMeC, 300, "msg #3");
setTimeout(printMeC, 400, "msg #4");

function debounceC(func, ms) {
  //answer for c)
  let timeout;

  return function (msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout); //reset the timer for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms, msg);
  };
}

//4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
//sequence is the sum of the previous 2.
//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//a) Write a function printFibonacci() using setInterval that outputs a number in
//the Fibonacci sequence every second.
//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
//calls to do the same thing
//c) Extend one of the above functions to accept a limit argument, which tells it how many
//numbers to print before stopping.

function printFibonacci() {
  //using setInterval
  let first = 1;
  let second = 1;

  console.log(first);
  console.log(second);

  setInterval(function printNext() {
    let next = first + second;
    console.log(next);

    first = second; //next time the interval runs,
    second = next; //first and second each move up the sequence
  }, 1000);
}

function printFibonacciTimeouts() {
  //using nested setTimeout
  let [first, second] = [1, 1];
  console.log(first);
  console.log(second);

  setTimeout(
    function printNext(first, second) {
      let next = first + second;
      console.log(next);

      setTimeout(printNext, 1000, second, next); //call the same function again with different argument values
    },
    1000,
    first,
    second
  );
}

function printFibonacciLimit(limit) {
  let first = 1;
  let second = 1;

  console.log(first);
  console.log(second);

  let counter = 2; //we already printed the first two numbers

  let intervalRef = setInterval(function printNext() {
    let next = first + second;
    console.log(next);

    first = second; //next time the interval runs,
    second = next; //first and second each move up the sequence

    counter++; //keep track of how many numbers we've printed

    if (counter == limit) clearInterval(intervalRef); //stop if we're at the limit
  }, 1000);
}

//5. The following car object has several properties and a method which uses them to print a
//description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
//b) Change the year for the car by creating a clone of the original and overriding it
//c) Does the delayed description() call use the original values or the new values from b)? Why?
//d) Use bind to fix the description method so that it can be called from within
//setTimeout without a wrapper function
//e) Change another property of the car by creating a clone and overriding it, and test that
//setTimeout still uses the bound value from d)

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); //works
setTimeout(() => car.description(), 200); //a) => //c) this now works, but prints new year value below instead of original, //because the object has changed since the timeout was set up

car = { ...car, year: 2015 }; //b

let describeCar = car.description.bind(car); //d)

setTimeout(describeCar, 400); //this now works

car = { ...car, year: 2020 }; //e) even if we override the year it keeps the bound value

//6. Use the Function prototype to add a new delay(ms) function to all functions, which can
//be used to delay the call to that function by ms milliseconds.
//a) Use the example multiply function to test it with, as above, and assume that all
//delayed functions will take two parameters
//b) Use apply to improve your solution so that delayed functions can take any number of parameters
//c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

Function.prototype.delay = function (ms) {
  //a) solution assumes two arguments and passes them through
  let originalFunction = this;
  return function (arg1, arg2) {
    setTimeout(originalFunction, ms, arg1, arg2);
  };
};

multiply.delay(200)(5, 5); // prints 25 after 200 milliseconds

Function.prototype.delayB = function (ms) {
  let originalFunction = this;
  return function () {
    setTimeout(() => originalFunction.apply(this, arguments), ms);
  };
};

function multiply4(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply4.delayB(500)(5, 5, 5, 5); // prints 625

//7. In JavaScript, the toString method is used to convert an object to a string representation.
//By default, when an object is converted to a String, it returns a string that looks something like [object Object].
//However, we can define our own toString methods for custom objects to provide a more meaningful string representation.
//a) Define a custom toString method for the Person object that will format and print their details
//b) Test your method by creating 2 different people using the below constructor function and printing them
//c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
//d) Add a custom toString for Student objects that formats and prints their details. Test
//with 2 students.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `${this.name} is a ${this.age} year old ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1);
const person2 = new Person("Diana Ross", 78, "female");
console.log("person2: " + person2);
const person3 = new Person("Aretha Franklin", 76, "female");
console.log("person3: " + person3);
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function () {
  return `${this.name} is a ${this.age} year old ${this.gender} student in the
${this.cohort} cohort`;
};
const student1 = new Student(
  "Alice Mackenzie",
  23,
  "female",
  "se-au-ft-1jan23"
);
console.log("student1: " + student1);
const student2 = new Student("Gavin Williams", 31, "male", "se-au-ft-1jan23");
console.log("student2: " + student2);

//8. The following DigitalClock class uses an interval to print the time every second once started, until stopped.
//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
//parameter precision – the number of ms between 'ticks'. This precision parameter
//should default to 1 second if not supplied.
//b) Create a new class AlarmClock that inherits from DigitalClock and adds the
//parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//default to 07:00 if not supplied.

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision ? precision : 1000;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const myPrecisionClock = new PrecisionClock("my precision clock:", 2000);
myPrecisionClock.start();
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime) {
    super(prefix);
    this.wakeupTime = wakeupTime ? wakeupTime : "07:00";
  }
  heckDisplay() {
    const now = new Date();
    const wakeupHours = this.wakeupTime.substring(0, 2);
    const wakeupMins = this.wakeupTime.substring(3);

    if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
      console.log("Wake Up!");
      this.stop();
    } else {
      this.display();
    }
  }

  start() {
    this.checkDisplay();
    this.timer = setInterval(() => this.checkDisplay(), 1000);
  }
}

const myAlarmClock = new AlarmClock("my alarm clock:", "17:00");
myAlarmClock.start();

//9. We can delay execution of a function using setTimeout, where we need to provide both
//the callback function and the delay after which it should execute.
//a) Create a promise-based alternative randomDelay() that delays execution for a
//random amount of time (between 1 and 20 seconds) and returns a promise we can use
//via .then(), as in the starter code below
//b) If the random delay is even, consider this a successful delay and resolve the promise,
//and if the random number is odd, consider this a failure and reject it
//c) Update the testing code to catch rejected promises and print a different message
//d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}
randomDelay().then((delay) =>
  console.log("There appears to have been a delay.")
);
function randomDelayB() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise(
    (
      resolve,
      reject // if even delay the resolve function, if odd delay the reject function
    ) => setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000)
  );
}
randomDelayB()
  .then(() => console.log("Successful delay"))
  .catch(() => console.log("Failed delay"));

function randomDelayD() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(delay % 2 === 0 ? resolve : reject, delay)
  );
}
randomDelayD()
  .then((delay) => console.log("Successful delay of " + delay + " seconds"))
  .catch((delay) => console.log("Failed delay of " + delay + " seconds"));

//Fetch is a browser-based function to send a request and receive a response from a server,
//which uses promises to handle the asynchronous response.
//The below fetchURLData uses fetch to check the response for a successful status
//code, and returns a promise containing the JSON sent by the remote server if successful
//or an error if it failed. (To run this code in a node.js environment, follow the instructions in
//the comments before the function.)
//a) Write a new version of this function using async/await
//b) Test both functions with valid and invalid URLs
//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",

import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
fetchURLData("https://jsonplaceholder.typicode.com/todos/1") //works, prints result
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
fetchURLData("https://jsonplaceholder.typicode.com/fake") //doesn't exist, prints catch
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function asyncFetchURLData(url) {
  //a)
  let fetchResponse = await fetch(url);

  if (fetchResponse.status === 200) {
    let responseJson = await fetchResponse.json();
    return responseJson;
  } else {
    throw new Error(`Request failed with status ${fetchResponse.status}`);
  }
}

async function asyncFetchMultipleURLData(urls) {
  //c)

  return Promise.all(
    urls.map(async (url) => {
      let response = await fetch(url);
      return response.json();
    })
  );
}

try {
  let responseData1 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(responseData1); //works

  let responseData2 = await asyncFetchMultipleURLData([
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
  ]);
  console.log(responseData2); //works

  let responseData3 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/fake"
  );
  console.log(responseData3); //fails
} catch (error) {
  console.log(error.message);
}
