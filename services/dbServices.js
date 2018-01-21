var MongoClient= require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://gaja12:gaja1210@ds111258.mlab.com:11258/projector-app").then(function(client){
    console.log("connected to mongodb");
    exports.database = client.db("projector-app");

  });
}
