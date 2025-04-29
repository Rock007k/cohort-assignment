const fs = require('fs');

function removeExtraSpaces(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const cleanedData = data.replace(/\s+/g, ' ').trim();
        fs.writeFile(filePath, cleanedData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('File cleaned successfully');
            }
        });
    });
};

removeExtraSpaces('demo.txt');