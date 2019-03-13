var mongojs = require("./node_modules/mongojs");
var databaseUrl = 'mongodb://localhost:27017/topyt';
var collections = 'things';
var db = mongojs(databaseUrl);
db.on('connect', function () {
  console.log('database connected')
});
var test = db.collection(collections);
console.log(test);

exports.getThings = function (limNum, response) {
  db.things.find().sort({ Rank: 1 }).limit(limNum, function (err, docs) {
    // docs is an array of all the documents in mycollection
    //console.log(docs);
    response.json(docs);
  });
}

