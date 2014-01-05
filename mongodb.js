
//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
	, format = require('util').format;


function queryUrl(res){
	MongoClient.connect('mongodb://MIPFinal:MIPFinal@ds061558.mongolab.com:61558/mip_final', function (err, db){
			if (err) throw err;
			console.log("Connected to Database");
				var collection = db.collection('jpgFile');
				///數有幾筆

				collection.count(function(err, count) {
					console.log("There are " + count + " records.");
				var resultArray = new Array();
				
				collection.find().toArray(function(err, docs) {
					docs.forEach(function(doc) {
						console.log("---------------------");
/*
						console.dir(doc);
						console.log("FUCK!!!"+doc.url);
*/
						var instance = {};
						instance.url = doc.url;
						instance.fileExtension = doc.fileExtension;
						console.log(instance);
						resultArray.push(instance);
					});
				console.log(resultArray);
			    res.send(resultArray);
				});

					
			});
	});	
}
	

	
var http = require('http'),
    url  = require('url'),
    fs   = require("fs"),
    qs   = require('querystring'),
    server;

var express = require('express');
var app = express();

app.listen(5566);
console.log('Listening on port 5566');


//app.get, app.post要針對對方瀏覽器傳過來的是什麼東西。不然會接不到東西
//post要加一個express.bodyParser()，才能正確parse傳進來的資訊
app.use(express.bodyParser());
app.post('/COMMAND',function(req, res){

    var responseData=req.body;
    console.log(responseData.command);
    console.log(responseData.arg1);
    switch (responseData.command){
	    case "QUERY_URL":
	        var queryResult = queryUrl(res);
	    default:
	    	break;
    }

    // res.send(req.body);

    //經過express.bodyParser()後，得到的req.body已經是json格式
    //所以直接指定給一個var，他就會用物件的方式轉換

/*
    var responseData=req.body;
    responseData.id = "123456";
    responseData.username=responseData.username+"!幹你妹";
    responseData.email=responseData.email+"回傳ㄌ";
    //用send傳回去
*/


});
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/testGarden.html');
});

app.use(express.static(__dirname));