const path = require('path');
const csv=require('csvtojson');
const fs = require('fs');
var async = require("async");
console.log(__dirname);
const csvFilePath = path.join(__dirname, 'customer-data.csv');
console.log(csvFilePath);
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //nsole.log(jsonObj);
  fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 


    
})


