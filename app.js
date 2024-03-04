// /////////////////////////ARRAYS////////////////////////////////

// 1. Declare an empty array using JS literal notation to store student names in future.

var students = [];

// 2. Declare an empty array using JS object notation to store student names in future. 
 students = {
    "students": []
};
// 3. Declare and initialize a strings array.

students["Ahmed", "Hammad", "Rabi"];
console.log(students);

// 4. Declare and initialize a numbers array.

num = [55, 44, 88, 77];
// 4. Declare and initialize a numbers array.
boolen = [true, false, true, false];

// 6. Declare and initialize a mixed array.

mix = ["John", 30, true, 'Hello'];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser

educationQualification = ['SSC', 'HSC', 'BCA', 'BBA', "MBA", "MSc", "PhD"];
document.write("<h1>Qualification</h1>")
document.write(" <h2> 1)"+ " " +educationQualification.slice(0,1)," </h2> ");
document.write(" <h2> 2)"+ " " +educationQualification.slice(1,2)," </h2> ");
document.write(" <h2> 3)"+ " " +educationQualification.slice(2,3)," </h2> ");
document.write(" <h2> 4)"+ " " +educationQualification.slice(3,4)," </h2> ");
document.write(" <h2> 5)"+ " " +educationQualification.slice(5,6)," </h2> ");
document.write(" <h2> 6)" + " " + educationQualification.slice(6), " </h2> ");


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

studentsNames = ["Ahmed","Hammad","Hassan"]; 
studentScores = [390, 300, 470];

var totalscores = 500;

var percentage1 = ((studentScores[0] / totalscores) * 100); 
var percentage2 = ((studentScores[1] / totalscores) * 100); 
var percentage3 = ((studentScores[2] / totalscores) * 100); 



document.write(" <h2> Score of ", studentsNames[0]," is ", studentScores[0],". Percentage is ",percentage1," %  </h2> "); 
document.write(" <h2> Score of ", studentsNames[1]," is ", studentScores[1],". Percentage is ",percentage2," %  </h2> "); 
document.write(" <h2> Score of ", studentsNames[2], " is ", studentScores[2], " and his/her percentage is ", percentage3, " %  </h2> ");



// 9. Initialize an array with color names. Display the array
// elements in your browser.
colorsArray = ['Red', 'Green', 'Blue'];
document.write("Initial Array: " + colorsArray);
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
colorAddedToBeginning = prompt("What color do you want to add to the beginning?");
colorsArray.unshift(colorAddedToBeginning);
document.write("<br>After Adding Color To Beginning: " + colorsArray);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
colorAddedToEnd = prompt("What color do you want to add to the end?");
colorsArray.push(colorAddedToEnd);
document.write("<br>After Adding Color To End: " + colorsArray);
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colorsArray.unshift("Brown","Purple");
document.write("<br>" + colorsArray);

// d. Delete the first color in the array. Display the updated
// array in your browser.
colorsArray.shift(0);
document.write("<br>" + colorsArray);

// e. Delete the last color in the array. Display the updated
// array in your browser.
colorsArray.pop();
document.write("<br>" + colorsArray);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
colorIndex = +prompt("which index You wants to add a color?");
colorIndexName = prompt("Color Name?");
colorsArray.push[colorIndex](colorIndexName );
document.write("<br> " + colorsArray);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

deleteCount = +prompt("which index You wants to delete color?") ;
startIndex =+prompt ("From Which Index You Want's To Start Deleting The Colors?");  
colorsArray.slice(startIndex,deleteCount);
document.write("<br> " + colorsArray);


