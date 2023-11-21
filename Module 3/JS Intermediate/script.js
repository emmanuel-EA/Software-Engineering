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


