console.log('running ES6 fulltime...');
// function getClothing(isCold){
//   if(isCold){
//     var freezing = 'grab jacket'
//   }else{
//     var hot = 'shorts day'
//     console.log(freezing);
//   }
// }
// getClothing(false)//undefined

//hoisting
//Before any JS code is executed, all variables are hoisted, meaning they are raised to the top of the function scope.
//So at runtime, the getClothing function lokks like this:
function getClothing(isCold){
  var freezing, hot;
  //rest of the code
}

//let and const
// Variables declared with let and const eliminate this specific issue of hoisting because they're scoped "to the block", not the function. Previously, when used with var, variables were either scoped globally or locally to an entire function scope.

//code now using let and const
function getClothing(isCold){
  if(isCold){
    const freezing = 'grab jacket'
  }else{
    const hot = 'shorts day'
    console.log(freezing);
  }
}
// getClothing(false)//ReferenceError: freezing is not defined

/* Rules for using let and const
let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned. */

/* Use cases
The big question is when should you use let and const? The general rule of thumb is as follows:

use let when you plan to reassign new values to a variable, and
use const when you don’t plan on reassigning new values to a variable. */

/* Since const is the strictest way to declare a variable, we suggest that you always declare variables with const because it'll make your code easier to reason about since you know the identifiers won't change throughout the lifetime of your program. If you find that you need to update a variable or change it, then go back and switch it from const to let. */

/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 110;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

// displayPosts(); //got it!

//Use template literals

// Here’s where template literals really shine. In the animation above, the quotes and string concatenation operator have been dropped, as well as the newline characters ( \n ). That's because template literals also preserve newlines as part of the string!
let student = 'George'
let teacher = 'Mrs. C'
let parent = 'Ms. GG'

let note = `${teacher},

Please excuse ${student},
He is recovering from the flu.

Thank you,
${parent}`
// console.log(note);

// TIP: Embedded expressions inside template literals can do more than just reference variables. You can perform operations, call functions and use loops inside embedded expressions!
/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 Modify the createAnimalTradingCardHTML() function to use a template literal for cardHTML.
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    // const cardHTML = '<div class="card">' +
    //     '<h3 class="name">' + animal.name + '</h3>' +
    //     '<img src="' + animal.name + '.jpg" alt="' + animal.name +'" class="picture">' +
    //     '<div class="description">' +
    //         '<p class="fact">' + animal.fact + '</p>' +
    //         '<ul class="details">' +
    //             '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
    //             '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
    //             '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
    //             '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
    //         '</ul>' +
    //         '<p class="brief">' + animal.summary + '</p>' +
    //     '</div>' +
    // '</div>';

    const cardHTML = `<div class="card">
    <h3 class="name"> ${animal.name} </h3>
    <img src=${animal.name}.jpg alt=${animal.name} class="picture" />
    <div class="description">
      <p class="fact"> ${animal.fact} </p>
      <ul class="details">
        <li><span class="bold"> Scientific Name </span> ${animal.scientificName} </li>
        <li><span class="bold"> Average Lifespan </span> ${animal.lifespan} </li>
        <li><span class="bold"> Scientific Name </span> ${animal.speed} </li>
        <li><span class="bold"> Scientific Name </span> ${animal.diet} </li>
      </ul>
      <p class="brief"> ${animal.summary} </p>
    </div>
    </div>`

    return cardHTML;
}

// console.log(createAnimalTradingCardHTML(cheetah));

/* Destructuring from arrays and objects
// Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

Destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
Prints: 10 25 -34
In this example, the brackets [ ] represent the array being destructured and x, y, and z represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.
*/
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;

console.log(second);//Jarrod

// Destructuring values from an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, color, karat} = gemstone;

// console.log(type, color, karat);

/* In this example, the curly braces { } represent the object being destructured and type, color, and karat represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named type, the value is automatically stored in the type variable. Similarly, gemstone has a color property, so the value of color automatically gets stored in the color variable. And it's the same with karat.

TIP: You can also specify the values you want to select when destructuring an object. For example, let {color} = gemstone; will only select the color property from the gemstone object. */

// What do you expect to be returned from calling getArea()?

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
// console.log(getArea()); //NaN OJO!!!

// Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 Use array destructuring to pull out the three colors from the array of things and store them into the variables one, two, and three.
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const [one] = things;
// const [two] = '';
// const [three] = '';
// const [four] = things;
// const [five] = '';
// const [six] = '';
// const [seven] = '';
// const [eight] = things;
const [one,,,two,,,,three] = things

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

// console.log(colors);

//Object literal shorthand
// let type = 'quartz';
// let color = 'rose';
// let carat = 21.29;

// const gemstone = {
//   type: type,
//   color: color,
//   carat: carat
// };
// const gemstone = {
//   type,
//   color,
//   carat
// };

//Speaking of shorthand, there’s also a shorthand way to add methods to objects.

// To see how that looks, let’s start by adding a calculateWorth() method to our gemstone object. The calculateWorth() method will tell us how much our gemstone costs based on its type, color, and carat.

// let type = 'quartz';
// let color = 'rose';
// let carat = 21.29;

// const gemstone = {
//   type,
//   color,
//   carat,
//   calculateWorth: function() {
//     // will calculate worth of gemstone based on type, color, and carat
//   }
// };
// In this example, an anonymous function is being assigned to the property calculateWorth, but is the function keyword really needed? In ES6, it’s not!

// Shorthand method names
// Since you only need to reference the gemstone’s calculateWorth property in order to call the function, having the function keyword is redundant, so it can be dropped.

// let gemstone = {
//   type,
//   color,
//   carat,
//   // calculateWorth() { ... }
// };

// For...of loop
// The for...of loop is used to loop over any type of data that is iterable.

// You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

// But wait, there’s more! The for...of loop also has some additional benefits that fix the weaknesses of the for and for...in loops.

// You can stop or break a for...of loop at anytime.
const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits2) {
  if (digit % 2 === 0) {
    continue;
  }
  // console.log(digit);
}

// And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits3) {
  // console.log(digit);
}

// Quiz
// Write a for...of loop that loops through each day in the days array
// capitalizes the first letter of the day
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

//can't use charAt since im iterating over an array
for(const day of days){
  let firstLetter = day.slice(0,1).toUpperCase()
  let fullday = firstLetter + day.slice(1)
  console.log(fullday);
}

// const f = () => {
//   console.log('arrow f works');
// }
// f()

//
// function fx(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(fx('friday'))


//get the index of each item by destructuring the data
const cuts = ['Chuck', 'Brisket', 'Shank', 'Ribs']
for (const [i, cut] of cuts.entries()){
  console.log(`${cut} is the ${i} of item`); //Chuck is the 0 item, Brisket is the 1, etc
  // console.log(`${cut} is the ${i+1} of item`); //offset:Chuck is the 1 item, Brisket is the 2, etc
}

//adding all numbers up without knowing how many numbers we're gonna get
function addUpNumbers() {
  let total = 0
  for(const num of arguments){
    total += num
  }
  console.log(total);
  return total
}
addUpNumbers(34,35,46,346,46,3423,446,46,46,346,6,90) //

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

// Using the rest parameter
// Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.
let sum = (...nums) => {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(234,35345,466,333)) //much better than using the arguments object
// This version of the sum() function is both more concise and is easier to read. Also, notice the for...in loop has been replaced with the new for...of loop.

//loop over 2-dim array
var grid = [['0, 0', '0, 1', '0, 2'],
            ['1, 0', '1, 1', '1, 2'],
            ['2, 0', '2, 1', '2, 2']];
for(let i = 0; i < grid.length; i++){
  for(let j = 0; j < grid[i].length; j++){
    // console.log(grid[i][j]);//will print every item for each element in the 2-dim array Great!!
  }
}

//fizzbuzz challenge
const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++){
    //1st check it for both cases, then on each case, finally(else) print out the number
    if(i % 3 === 0 && i % 5 === 0){ //or just i % 15 === 0 to refactor
      console.log('fizzBuzz');
    }
    else if(i % 3 === 0){
      console.log('fizz');
    }
    else if(i % 5 === 0){
      console.log('buzz');
    }else {
      console.log(i);
    }
  }//end of for-loop
}//end of function
fizzBuzz(20)

/* Harmless Ransom Note - Source Code
Section 3, Lecture 12 -learning algorithms in JavaScript */

function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });

  return noteIsPossible;
}

let result3 = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
console.log(result3); //true

/* Is Palindrome algorithm - without regexp */
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrome("Madam, I'm Adam");

//some test func to clean up an array of non characters letters
const practice = (items) => {
  //lower case it and convert it to an array
  items = items.toLowerCase().split('')
  // console.log(items);
  let newArr = []
  //declare valid chars array
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for(let item of items){
      // console.log('in loop:',items);

      //check if element does exit in validCharacters array
    if(validCharacters.indexOf(item) > -1){
      newArr.push(item)
    }
  }
  //return newArr convert it back to a string
  return newArr.join('')
}

let staff = "This is a note. I'm working on my interview, code, code, code!"
// let staff = ['a','b',';','c',',','d']
console.log(practice(staff)) //thisisanoteimworkingonmyinterviewcodecodecode

// Caesar Cipher - Source Code
// Section 5, Lecture 20
function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };

  return newString;
}
// caesarCipher('Zoo Keeper', 2);

//factorial
function factorial(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}

console.log(factorial(5));

//fibonacci challenge
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
console.log('****************');
console.log(fibonacci(6));
console.log('****************');

/*
Using the rest parameter
Fortunately, with the addition of the rest parameter, you can rewrite the sum() function to read more clearly.
*/
function sum1(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

// *
//  * Programming Quiz: Using the Rest Parameter (1-5)
//  */

function average(...nums) {
  let sumAll = 0
  let avg = 0
  for(const num of nums){
    sumAll += num
    avg = sumAll / nums.length
  }
  return avg
}
console.log('****************');
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
console.log('****************');

//
