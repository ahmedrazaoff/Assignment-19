// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

deleteCount = +prompt("which index You wants to delete color?") ;
startIndex =+prompt ("From Which Index You Want's To Start Deleting The Colors?");  
colorsArray.slice(startIndex,deleteCount);
document.write("<br> " + colorsArray);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var scoreArr = [95, 87, 64, 72, 93];
scoreArr.sort((a,b)=>a-b);
document.write("<h2>" + scoreArr + "</h2>");

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var  cities= ["New York", "London","Paris","Berlin","Tokyo"];
var selectedCities=[cities[0],cities[2]];
document.write(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
var arr = ["This ", " is ", " my ", " cat"];
// (Use array’s join method)
var str = arr.join("");
document.write("<br>",str);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var fifo = [];
// fifo.push(10);
// fifo.push(20);
// fifo.push(30);
// document.write("The value at first position of FIFO : "+fifo[0]);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var  phones = ['Apple', 'Samsung','Motorola','Nokia','Sony','Haier'];
document.write('<br><select name="phone">');
for(i=0; i <phones.length ; i++) {
    document.write('<option>'+phones[i]+'</option>')
}
document.write('</select>');

/////////////////////////////////Chapter 15 (Array I)//////////////////////////

// 1. Declare an empty array.
var x = [];

//2. Code an array with 1 string element

var y = ["Hello World!"];

//3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index


var alphabet = ["h", "i", "j", "k"]
alert(alphabet[2]);

//var alphabet=["h","i","j","k",l,m,n,o]. Find the totallength of array.
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var totalLength = alphabet.length;
alert("Total length is:" + totalLength);

//Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
var z = [];
z[0] = "I am first";
z[1]= "I am Second";
alert(x[1]);

//////////////////////Chapter 16 (Array II)//////////////////////////

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.

var  arr = ["Hi there"];
arr.push ("How are you?");
alert(arr[1]);

// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
alert(Alphabet[3]);

//3. Add a new element, a number, to the end of an array.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(4);
alert(Alphabet[4]);


///////////////////////////Chapter 16 (Array III)/////////////////////
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

//2. Add three number elements to the beginning of an array.

sizes.unshift(3);

//3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.

var v = [];
v.unshift("second");
alert("new first element" + v[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".


var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var index = sizes.indexOf("XL");
sizes.splice(index, 1, "L");
console.log(sizes);


// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];
var indx = pets.indexOf("dog")+1;
pets.splice(indx, 0,"fish","bird");
console.log(pets);

// 7. var pets = ["dog", "cat"," ox", "duck", "frog"]; Remove cat and ox

var pets = ["dog", "cat", " ox", "duck", "frog"];
pets.splice(1,2);
console.log(pets);


// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to
// "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var slipets = pets.slice(3, 5);
console.log(slipets);