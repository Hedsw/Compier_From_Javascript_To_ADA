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
    var end_match = (/END/gi);
    var IS_match = (/IS/gi);
function RecursiveDescentParser () {

var fs = require('fs');
fs.readFile(process.argv[2],function(err,data) {
    if(err) throw err;

var text = data.toString();
var lines = text.split('\n');

var procedure_tmp = text.split(' ');
var procedure_count = 0;

//이걸로 프로시저의 갯수가 몇개 있는지 체크함.. Begin End 만들려고
  for(var i = 0; i < lines.length; i++) 
    if(lines[i].match(procedure_match) != null)
           procedure_count++;
      
//begin end check
  if(procedure_count == 1) {
    for(var i = 0; i< lines.length; i++) {
      if(lines[i].match(procedure_match) != null) {
        tmp_line = lines[i].split(' ');
        idt_check = tmp_line[1];
      }
    if(lines[i].match(end_match) != null) {
        tmp_line = lines[i].split(' ');
        tmp_line2 = tmp_line[1].split(';');
        end_check = tmp_line2[0];
      }
    }
    if(end_check.match(idt_check) == null) 
      console.log("idt and end is not matched");
  }
  if(procedure_count == 2) {
    
  }

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
      var mode_check = 0; // ) 의 위치 체크
      var mode_check2 = 0; // ; 위치 체크
      var mode_check3 = 0; // : 갯수 체크
      var mode_check4 = 0; // ; 갯수 체크
            
      //Is check
     if(lines2[0].match(procedure_match) != null) {
      lines2.forEach(function(line_ISCHECK) {
        if(line_ISCHECK.match(IS_match) != null) {
          is_check++;
        }
      })

      //Is Checking
      if(is_check < 1) {
        console.log("IS is missing\n");
        console.log(lines2);
        is_check = 0;
      }

      //Paran Check 
      for(var i = 0; i < line.length; i++) {
       //console.log(line[i]);
      if(line[i] == "(") { 
          paran_check++;
          mode_check = i;
      }
      if(line[i] == ")")
          paran_check++;
      if(line[i] == ";") {
          mode_check4++;
          mode_check2 = i; //이것을 가지고.. :가 몇개 있는지 확인.. 그걸로 move check 하기
      }
       if(line[i] == ":")
          mode_check3++;
    }
      if(paran_check == 1) {
        console.log(line + "Paranthesis is missing\n");
        paran_check = null;
      }
      tmp = mode_check3 - mode_check4;

      if(mode_check4 >= mode_check3 && paran_check > null) 
        console.log(line + ": or ; missing");
      
//    이걸 가지고 이제.. 그 Mode(in, out, inout) 체크를 해야함
    //   for(var i = mode_check; i < mode_check2; i++) {
    //     console.log(line[i]);
    // }

  }
}


RecursiveDescentParser ();


