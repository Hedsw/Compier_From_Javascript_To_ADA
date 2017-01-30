/*
Name : Yunhyeo Lee
Instructor : George Hamer
Due Date : Feb 1 2017
Class : Complier CSC 446
*/

/*
Get File name from console to check data
*/
var result = 0;

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}

/*
Input File into this program to split each line!
*/
var fs = require('fs');
fs.readFile(process.argv[2],function(err,logData) {
    if(err) throw err;

    var text = logData.toString().split('\n');
    console.log(text);

    // var text_split = text.toString().split(' ');
    // console.log(text_split);
});


//
// // 비동기식 파일 쓰기
// var fs = require('fs');
// var data = "hi banana";
// fs.writeFile('text.txt', data, 'utf8', function(error) {
// 	console.log('writeFile completed');
// });
