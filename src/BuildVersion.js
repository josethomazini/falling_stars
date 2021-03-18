const fs = require('fs');

const date = new Date();

const day = (`0${date.getDate()}`).slice(-2);
const month = (`0${date.getMonth() + 1}`).slice(-2);
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const buildVersion = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

let jsonData;

fs.readFile('src/app.json', 'utf8', (readErr, jsonRead) => {
  if (readErr) {
    throw readErr;
  }
  jsonData = JSON.parse(jsonRead);
  jsonData.buildVersion = buildVersion;
  const jsonToWrite = JSON.stringify(jsonData);

  fs.writeFile('src/app.json', jsonToWrite, (writeErr) => {
    if (writeErr) {
      throw writeErr;
    }
  });
});
