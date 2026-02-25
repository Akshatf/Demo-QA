const fs = require('fs');

function writeFile(data) {
  fs.writeFileSync(
    'bookDetails.txt',
    `Title: ${data.title},
     Author: ${data.author},
     Publisher: ${data.publisher}`
  );
}

module.exports = writeFile;