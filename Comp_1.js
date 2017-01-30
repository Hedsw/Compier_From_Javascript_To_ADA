var fs = require('fs');
fs.readFile('Test.txt',function(err,logData) {
    if(err) throw err;

    var text = logData.toString().split('\n');
    console.log(text);

    // var text_split = text.toString().split(' ');
    // console.log(text_split);

    
});

console.log('Is it work?');


//
// // 비동기식 파일 쓰기
// var fs = require('fs');
// var data = "hi banana";
// fs.writeFile('text.txt', data, 'utf8', function(error) {
// 	console.log('writeFile completed');
// });
