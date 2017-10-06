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
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for(const day of days){
  console.log(day.chartAt(0).toUppercase());
}
