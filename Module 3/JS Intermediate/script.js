//Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, 
//as in the example below. Test it with different strings.Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.
function capitalizeFirstChar(s) {
    return s.replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
}
console.log(capitalizeFirstChar("perth"))
console.log(capitalizeFirstChar("esomchi emmanuel"))

//Create a function truncate(str, max) that truncates a given string of text if its total
//length is greater than the max length. It should return either the truncated text, with an
//ellipsis (...) added to the end if it was too long, or the original text otherwise.
//b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
    return str.length > max ? str.slice(0, max - 3) + '...' : str;
}

function truncate1(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + '...';
    } else {
        return str;
    }
}

console.log(truncate('Hello world', 5)) 
console.log(truncate('This is a very long sentence', 20));

//Use the following animals array for the below tasks. Test each one by printing the result to the console.
//a) Add 2 new values to the end b) Add 2 new values to the beginning
//c) Sort the values alphabetically d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Turtle');
animals.push('koala')
console.log(animals)

animals.unshift('Monkey')
animals.unshift('Snake')
console.log(animals)

animals.sort()
console.log(animals)
function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;
    animals[halfway] = newValue
}
console.log(animals)

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal =>
        animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}
console.log(findMatchingAnimals('t'))

//Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
//The function should remove all dashes, and uppercase the first letter of each word after a dash.
//b) Create variants of the camelCase function that use different types of for loops, and d)
//with and without the conditional operator.

function camelCase(cssProp) {
    return cssProp.replace(/-[a-z]/g, (match) => match[1].toUpperCase());
}

//For Loop using an index
function camelCase(cssProp) {
    let words = cssProp.split('-');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}
// For-in Loop
function camelCase(cssProp) {
    let words = cssProp.split('-');
    for (let i in words) {
        if (i > 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join('');
}
// With the conditional operator
function camelCase(cssProp) {
    let words = cssProp.split('-');
    let result = '';
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        result += (i === 0) ? word : word.charAt(0).toUpperCase() + word.slice(1);
    }
    return result;
}
// Without the conditional operator
function camelCase(cssProp) {
    let words = cssProp.split('-');
    for (let i = 1; i < words.length; i++) {
        let firstChar = words[i].charAt(0);
        words[i] = firstChar.toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase('display')) // display


//Explain why the code returns the wrong answer
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen) //fixedTwenty + fixedTen doesn't work
//because toFixed returns a string, and it concatenates the two values instead of performing addition

//Create a function currencyAddition(float1, float2) which safely adds the two
//decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;

    return (wholeNumber1 + wholeNumber2) / 100
}

//Create a function currencyOperation(float1, float2, operation) which
//safely performs the given operation (either +, -, / or *) on the two numbers and returns
//the correct float result. https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

function currencyOperation(float1, float2, operation) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;
    switch (operation) {
        case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*' :
            wholeResult = wholeNumber1 * wholeNumber2; break;
        case '-' :
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/' :
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default :
            wholeResult = wholeNumber1 + wholeNumber2;
    }
    //divide by the same factor we multiplied by
    return wholeResult / 100;
}

//(Extension) Extend the above function to include a fourth argument numDecimals
//which allows the operation to support different amounts of decimal places from 1 to 10.

function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 10**numDecimals; //exponential. for numDecimals=2, would be 10 to the power of 2, or 10*10
    let wholeNumber1 = float1 * factor;
    let wholeNumber2 = float2 * factor;
    let wholeResult = 0;

    switch (operation) {
        case '+' :
            wholeResult = wholeNumber1 + wholeNumber2; break;
        case '*' :
            wholeResult = wholeNumber1 * wholeNumber2; break;
        case '-' :
            wholeResult = wholeNumber1 - wholeNumber2; break;
        case '/' :
            wholeResult = wholeNumber1 / wholeNumber2; break;
        default :
            wholeResult = wholeNumber1 + wholeNumber2;
    }

    return Math.round(wholeResult) / factor;
}

//Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
//Your function should return an array containing only the unique values from duplicatesArray.
//Test with the following arrays and create another one of your own.

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
    const uniques = [];

    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    });
    return uniques; 
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

function getBookTitle(bookId) {
    let matchingBook = books.find(book => book.id == bookId);
    return matchingBook.title;
}
console.log(getBookTitle(3))

function getOldBooks() {
    return books.filter(book => book.year < 1950)
}
console.log(getOldBooks())
function addGenre() {
    books.map(book => book.genre = 'Classic');
}
addGenre();
console.log(books);

function getTitles(authorInitial) {
    return books
        .filter(book =>
book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
        .map(book => book.title);
}
console.log(getTitles('G'))

function latestBook() {
    let latestYear = 1900; //a value older than all books

    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });
    return books.find(book => book.year == latestYear);
}
console.log(latestBook())

//Create a new phoneBookDEF Map to store names beginning with D, E or F
//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
//c) Update the phone number for Caroline
//d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
//e) Combine the contents of the two individual Maps into a single phoneBook Map
//f) Print out the full list of names in the combined phone book

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
phoneBookABC.set('Emmanuel', '0466221119')

const phoneBookDEF = new Map([ //set the values to begin with using an array
    ['David', '04332277'],
    ['Elizabeth', '04776622'],
    ['Fred', '04373737']
])

phoneBookABC.set('Caroline', '0455812941');

function printPhoneBook(contacts) {
    for (let entry of contacts) {
        console.log(entry)
    }
}
printPhoneBook(phoneBookABC)

const phoneBook = new Map(
[...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]) );

console.log([...phoneBook.keys()])

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
//b) Write a function topEarner(salaries) that calculates and returns the name of the person
//earning the highest salary

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let totalSalaries = 0;

    //destructured Object.entries in for...of loop
    for (let [name, salary] of Object.entries(salaries)) {
    totalSalaries += salary;
    }

    return totalSalaries;
}
    
console.log(sumSalaries(salaries))

function topEarner(salaries) {
    let topSalary = 0;
    let topEarner = '';
    //for...in loop to access object properties
    for (let name in salaries) {
        if (salaries[name] > topSalary) {
            topSalary = salaries[name];
            topEarner = name;
        }
    }   

    return topEarner;
}

console.log(topSalary(salaries) + ' earns the most')

//10.The following code uses the Date object to print the current time and the number of hours
//that have passed today so far. Extend the code to do the following:
//a) Print the total number of minutes that have passed so far today
//b) Print the total number of seconds that have passed so far today
//c) Calculate and print your age as: 'I am x years, y months and z days old'
//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
//of days in between the two given dates.

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) 
+ 'seconds have passed today')

const birthday = new Date('1990-01-01')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
console.log(`I am ${years} years, ${months} months and ${days} days old`)

function daysInBetween(date1, date2) {
    let differenceMS = date2 - date1;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
    return Math.abs(differenceDays);
}
console.log(`Days between ${birthday.toLocaleDateString()} and
${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`)
console.log(`Days between 2022-01-15 and 2023-01-01: ${daysInBetween
(new Date('2023-01-01'), new Date('2022-01-15'))}`)
