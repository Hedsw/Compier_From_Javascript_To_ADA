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
fs.readFile(process.argv[2],function(err,logData) {
    if(err) throw err;

    var tmp = logData.toString().split('\n');
    var pattern = /\n|\t|\v|\s|\W/;
    //var pa = /^:=/;
    var text = logData.toString().split(pattern);
    var reserved_words = (/CONSTANT|MODULE|BEGIN|PROCEDURE|IS|IF|THEN|ELSE|ELSEIF|WHILE|LOOP|FLOAT|INTEGER|CHAR|CHAR|GET|PUT|END/i);


    console.log("\n\n\nChecking reserved words, tokens, relational operator\n\n\n");

    var myarray;
    var reverse_check = [""];
    for(var i=0; i < tmp.length; i++)
    {
        if(reserved_words.exec(tmp[i])!== null) {
                 myarray = reserved_words.exec(tmp[i])
                  reverse_check.push(' reserved_word:  '+myarray+'t');
                    //console.log(tmp[i]+ ' || ' +tmp_msg[i+1]);
        }
        else {
          reverse_check.push('');
        }
    }
    var relationalOperCheck = [""];
    for(var i=0; i < tmp.length; i++)
    {
        if(tmp[i].indexOf('+') != -1) {
                  relationalOperCheck.push('addops : + ');
        }
        else if(tmp[i].indexOf('-') != -1) {
                  relationalOperCheck.push('addops : - ');
        }
        else {
          relationalOperCheck.push('');
        }
    }
    var relationalOperCheck2 = [""];
    for(var i=0; i < tmp.length; i++)
    {
        if(tmp[i].indexOf('*') != -1) {
                  relationalOperCheck2.push('addops : * ');
        }
        else if(tmp[i].indexOf('/') != -1) {
                  relationalOperCheck2.push('addops : / ');
        }
        else if(tmp[i].indexOf('rem') != -1) {
                  relationalOperCheck2.push('addops : rem ');
        }
        else if(tmp[i].indexOf('mod') != -1) {
                  relationalOperCheck2.push('addops : mod ');
        }
        else if(tmp[i].indexOf('and') != -1) {
                  relationalOperCheck2.push('addops : and ');
        }
        else {
          relationalOperCheck2.push('');
        }
      }
      var symbolcheck = [""];
      for(var i=0; i < tmp.length; i++)
      {
          if(tmp[i].indexOf('(') != -1) {
                    symbolcheck.push('paranthesis: ( ) ');
          }
          else {
            symbolcheck.push('');
          }
      }

      var symbolcheck2 = [""];
      for(var i=0; i < tmp.length; i++)
      {
          if(tmp[i].indexOf(':=') != -1) {
                    symbolcheck2.push('Assginop: := ');
          }
          else {
            symbolcheck2.push('');
          }
      }
      var symbolcheck3 = [""];
      for(var i=0; i < tmp.length; i++)
      {
          if(tmp[i].indexOf(';') != -1) {
            symbolcheck3.push('Semicolon: ; ');
          }
          else {
            symbolcheck3.push('');
          }
      }
      var symbolcheck4 =[""];
      for(var i=0; i < tmp.length; i++)
      {
          if(tmp[i].indexOf('--') != -1) {
            symbolcheck4.push('Comment: -- ');
          }
          else {
            symbolcheck4.push('');
          }
      }
      var re = /^[a-zA-Z0-9_-]{0,17}$/;
      var id_check=[""];
      for(var i=0; i< tmp.length; i++)
      {
        var OK = re.test(tmp[i]);
        if(!OK)
        {
          id_check.push(" ");
        }
        else
        {
          id_check.push("invalid ID exist");
        }
      }
     for(var i =0; i<tmp.length; i++)
       console.log(tmp[i]+ ' || ' + reverse_check[i+1] + ' ' + relationalOperCheck[i+1] + ' ' + relationalOperCheck2[i+1] +' '+ symbolcheck[i+1] +' '+symbolcheck2[i+1]+' '+symbolcheck3[i+1]+' '+symbolcheck4[i+1]+' '+id_check[i+1]);
    });
}
