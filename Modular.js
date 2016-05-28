// Modular

var myModule = require('./addfiltered.js');

myModule(process.argv[2], process.argv[3], function (err, data) {
  if (err)
    return console.error('Error:', err);

  data.forEach(function (file) {
    console.log(file);
  });
});