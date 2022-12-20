

//

var sscMarks=39
var resultPassOrFail=sscMarks>=35 ? "Pass" : "Fail";
console.log(`Result is ${resultPassOrFail}`);

var sscResult=function(sscMarks){
    var resultPassOrFail=sscMarks>=35 && sscMarks>100 ? "Pass" : "Fail";
    return resultPassOrFail;
}
console.log(`Result is 23 ${sscResult(23)}`);
console.log(`Result is 45 ${sscResult(45)}`);
console.log(`Result is 23 ${sscResult(1200)}`);
console.log(`Result is 23 ${sscResult(99)}`);
console.log(`Result is 23 ${sscResult(23)}`);