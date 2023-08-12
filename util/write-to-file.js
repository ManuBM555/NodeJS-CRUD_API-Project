const fs = require('fs'); //File System
const path = require('path');

module.exports = (data) => {
    // console.log('The data to write in file is :',data);
    try {
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'movies.json'),
         JSON.stringify(data), 'utf-8');
    } catch (error) {
        console.log(error);
    }
    
}
