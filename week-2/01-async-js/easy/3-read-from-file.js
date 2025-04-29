const fs = require('fs');

let ans ;

 fs.readFile('demo.txt' ,function(err,data){
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        return data.toString();
    });
    console.log("Asynchronous read: " + ans);



console.log("hello world");




// count = 0;
// for(let i = 0; i < 100000000; i ++)
//     count ++;

// console.log(ans);
