
//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient,
	format = require('util').format;
	
	Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');




function queryUrl(res){
	MongoClient.connect('mongodb://MIPFinal:MIPFinal@ds061558.mongolab.com:61558/mip_final', function (err, db){
			if (err) throw err;
			console.log("Connected to Database");
				var collection = db.collection('jpgFile');
				///數有幾筆

			
/*
			collection.insert([{'url': 'AbdoVeineux_30mm_9', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'CT_WB_Natif_20mm_3', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'P31849_20130605', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'P41829_20130501', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'P44674_20130504', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'SS20130302', 'fileExtension': 'jpg', 'path':'-1', 'color':'-1', 'circlePath':'-1','circleColor':'-1'}],{w:1}, function(docs) {});
*/
/*
			collection.insert([{'url': 'IM', 'fileExtension': 'jpg', 'path':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'color':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'circlePath':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}','circleColor':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'uist', 'fileExtension': 'jpg', 'path':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'color':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'circlePath':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}','circleColor':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'tiny', 'fileExtension': 'jpg', 'path':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'color':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'circlePath':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}','circleColor':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'test', 'fileExtension': 'jpg', 'path':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'color':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}', 'circlePath':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}','circleColor':'{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}'}],{w:1}, function(docs) {});
	
*/
/* '{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{},"10":"{}"}' */
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
						instance.path = doc.path;
						instance.color = doc.color;
						instance.circlePath = doc.circlePath;
						instance.circleColor = doc.circleColor;
/* 						console.log(instance); */
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
    //用了body parser之後，連arg1裡面的東西都會parse成array，還蠻方變得
    console.log(responseData.arg1);
    switch (responseData.command){
	    case "QUERY_URL":
	        queryUrl(res);
	        break;
	    case "UPDATE_PATH":
	    	update_path(responseData.arg1,res);
			break;
	    default:
	    	break;
    }
    
});
    


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

function update_path(responseDataInput,res){
	console.log(responseDataInput);
	MongoClient.connect('mongodb://MIPFinal:MIPFinal@ds061558.mongolab.com:61558/mip_final', function (err, db){
			if (err) throw err;
			console.log("Connected to Database");
			
			var collection = db.collection('jpgFile');
			///數有幾筆
			console.log("yo:::"+JSON.stringify(responseDataInput.path));				
			
			for(var key in responseDataInput.path){
				console.log("key::"+key);
				console.log("YO!!!"+JSON.stringify(responseDataInput['path'][key]));
				
				collection.update({'url': key},{$set:{'path' : JSON.stringify(responseDataInput['path'][key])}},{upsert:true, w: 1}, function(err, numberUpdated) {
					console.log("PATH update number!+"+numberUpdated);
		      });
				collection.update({'url': key},{$set:{'color' : JSON.stringify(responseDataInput['color'][key])}},{upsert:true, w: 1}, function(err, numberUpdated) {
					console.log("COLOR update number!+"+numberUpdated);
		      });
				collection.update({'url': key},{$set:{'circlePath' : JSON.stringify(responseDataInput['circlePath'][key])}},{upsert:true, w: 1}, function(err, numberUpdated) {
					console.log("CIRCLEPATH update number!+"+numberUpdated);
		      });
				collection.update({'url': key},{$set:{'circleColor' : JSON.stringify(responseDataInput['circleColor'][key])}},{upsert:true, w: 1}, function(err, numberUpdated) {
					console.log("CIRCLECOLOR update number!+"+numberUpdated);
		      });
			}


			
			collection.count(function(err, count) {
				console.log("There are " + count + " records.");
			});
			
			var resultArray = new Array();
			
			collection.find().toArray(function(err, docs) {
				docs.forEach(function(doc) {
/* 					console.log("---------------------"); */
					var instance = {};
					instance.url = doc.url;
					instance.fileExtension = doc.fileExtension;
					instance.path = doc.path;
					instance.color = doc.color;
					instance.circlePath = doc.circlePath;
					instance.circleColor = doc.circleColor;

					console.log(instance);
					resultArray.push(instance);
				});
				console.log(resultArray);
			    res.send("OK!");
		    });	

	});	
}


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/testGarden.html');
});
app.get('/draw', function (req, res) {
  res.sendfile(__dirname + '/draw.html');
});
app.use(express.static(__dirname));