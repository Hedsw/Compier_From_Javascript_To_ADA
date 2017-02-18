/***************************************
Name : Yunhyeo Lee
Instructor : George Hamer
Due Date : Feb 20 2017
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

    var procedure_match = (/PROCEDURE/gi);
    var IS_match = (/is/gi);
function RecursiveDescentParser () {

var fs = require('fs');
fs.readFile(process.argv[2],function(err,data) {
    if(err) throw err;

var text = data.toString();
var lines = text.split('\n');
  //여기다가 모든 그 걸리는 절차 확인하기.. for each로 계속 만들기
   lines.forEach(function(line) {   
          match_Procedure(line); 
    })

  })
}

// Procedure Match
// Here is check about idt Args is
function match_Procedure(line) {
      var is_check = 0;
      var paran_check = 0;
      var lines2 = line.split(' ');
      //Is check
     if(lines2[0].match(procedure_match) != null) {
        // console.log(lines2);
      lines2.forEach(function(line_ISCHECK) {
        if(line_ISCHECK.match(IS_match) != null) {
          is_check++;
        }
      })
      if(is_check < 1) {
        console.log("IS is missing\n");
        console.log(lines2);
        is_check = 0;
      }
     
      //Paran Check 
      for(var i = 0; i < line.length; i++) {
       // console.log(line[i]);
      if(line[i] == ")") 
          paran_check++;
      if(line[i] =="(")
          paran_check++;
      }
      if(paran_check == 1) {
         console.log(line + "Paranthesis is missing\n");
         paran_check = null;
     }
      

  }
}

RecursiveDescentParser ();

