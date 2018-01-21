var movies = require("./moviedata");
var dbService=require("../services/dbServices.js");
 exports.getAllMovies = function(req, res, next) {
   console.log("dbService",dbService);
   var db=dbService.database;
   //query
   var moviesCollection=db.collection("movies");
   moviesCollection.find().toArray().then(function(result){
    // console.log("RESULT"+result);
    var outputJSON ={
     "isSuccess": true,
     "data" : result
   }

   return res.json(movies);
 });
};
exports.addNewMovie=function(req,res,next)
{
  var db=dbService.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess": true
    });
  });

}
