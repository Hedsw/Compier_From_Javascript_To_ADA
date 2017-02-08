/***************************************
Name : Yunhyeo Lee
Instructor : George Hamer
Due Date : Feb 1 2017
Class : Complier CSC 446
***************************************/
// To Test..  node Comp_1.js Test.txt

/*
Get File name from console to check data
*/
var result = 0;

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}

LexicalAnalyzer();
/*
Checking ID, Reserved_words, operator, Special Value
*/
function LexicalAnalyzer () {
  /*
  Input File into this program to split each line!
  */
var fs = require('fs');
fs.readFile(process.argv[2],function(err,data) {
    if(err) throw err;
    var reserved_words = (/CONSTANT|MODULE|BEGIN|PROCEDURE| IS|IF|THEN|ELSE|ELSIF|WHILE|LOOP|FLOAT|INTEGER|CHAR|CHAR|GET|PUT|END/gi);
    var comments = (/-- */);
    var rel_ops = /[;]|[:]|[()]|[=]|[<]|[>]|[<=]|[>=]/gi;
    var mul_ops = /[*]|[/]|rem|and|and|or\B/gi;
  //  var ass_ops = /[:=]/
    var result = ['reserve word is.. '];
    var text = data.toString();
    var lines = text.split('\n');

    var comment = [];
    var rel_op =[];
    lines.forEach(function(line) {
        console.log(line);
    });

      console.log("\n\n\nChecking..\n\n\n")


      // Checking Reserved_word
    lines.forEach(function(line) {
         if(line.match(reserved_words) !=null) {
           result.push(line.match(reserved_words));
         }
    })

    //console.log(result);
      var tmp = result.toString();
      var results = tmp.split(',');

    console.log('reserve word is.. ');
    for(var i = 1; i < results.length; i ++)
      console.log(results[i]+'t');

    console.log('comment is..');
    lines.forEach(function(line) {
        if(line.match(comments) != null) {
            comment.push(line + ' <-- comment');
        }
    })
      console.log(comment);

    //Relational Operator
    console.log('relational op is.. ');
    lines.forEach(function(line) {
    if(line.match(rel_ops) != null) {
            rel_op.push(line.match(rel_ops));
        }
    })
      for(var i = 0; i < rel_op.length; i ++)
      console.log(rel_op[i] +  ' <-- relational op \n ');

      //Mul Operator
      var mul_op =[];
      lines.forEach(function(line) {
      if(line.match(mul_ops) != null) {
              mul_op.push(line.match(mul_ops));
          }
      })
        for(var i = 0; i < mul_op.length; i ++)
        console.log(mul_op[i] +  ' <-- Multiple op \n ');

      //Assign Operator
      //Mul Operator
      var ass_op =[];
      lines.forEach(function(line) {
      if(line.match(':=') != null) {
              ass_op.push(line.match(':='));
          }
      })
      for(var i = 0; i < ass_op.length; i ++)
      console.log(ass_op[i] +  ' <-- assign op \n ');

      var pattern1='"';
      var check_que;
       for(var i = 0; i < lines.length; i++) {
          for( var j = 0; j <lines[i].length; j++) {
            if(lines[i][j] == pattern1)
                check_que = check_que + 1;
          }
          if(check_que == 1)
            console.log("Unchecked Que mark");
            check_que = 0;
        }

      var check_paran=0;
      var Lparanthesis = '(';
      var Rparanthesis = ')';
      for(var i = 0; i < lines.length; i++) {
         for( var j = 0; j <lines[i].length; j++) {
           if(lines[i][j] == Lparanthesis) {
              if(lines[i][j] == Rparanthesis || lines[i][j] == Lparanthesis) {
                check_paran = check_paran + 1; //Two is matched Correctly
            }
         }
       }
    }
      if(check_paran == 2)
        console.log("L and R paranthesis is working correctly");



    })
  }
