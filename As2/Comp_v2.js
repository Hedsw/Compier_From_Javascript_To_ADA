/***************************************
Name : Yunhyeo Lee
Instructor : George Hamer
Due Date : Feb 1 2017
Class : Complier CSC 446
***************************************/
// To Test..  node Comp_v2.js Test.txt

/*
Get File name from console to check data
*/
var result = 0;

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}

RecursiveDescentParser();
/*
Checking ID, Reserved_words, operator, Special Value
*/
function RecursiveDescentParser () {

var fs = require('fs');
fs.readFile(process.argv[2],function(err,data) {
    if(err) throw err;

 var text = data.toString();
    var lines = text.split('\n');

    lines.forEach(function(line){
      console.log(line);
    });

      console.log("\n\n\nChecking..\n\n\n")

  })
}