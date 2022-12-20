 //Function Expression-Storing a function as a value
 
 var myName=function(num1,num2,city){
    var result=num1*num2;
    return result
}
var res=myName(10,50,"solapur");
console.log(res);

console.log("==========concat()===========")
var firstName="Mohit";
var lastName="Sharma";
//Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);

var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

console.log( greet.replace("Mor", "Eve"));

console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);


var indexOfG = greet.indexOf("g");
console.log("Index of substring g:",indexOfG);


var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);


 