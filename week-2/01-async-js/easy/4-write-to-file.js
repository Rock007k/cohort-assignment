const fs = require('fs');

fs.appendFile('demo.txt', 'gautam maheshwari', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully');
  }
});

fs.readFile('demo.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Error reading file:', err);
    }
    else{
        console.log('File content:', data);
    }
});