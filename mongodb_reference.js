/*
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
* More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html
*/

//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
	, format = require('util').format;

//connect away
MongoClient.connect('mongodb://MIPFinal:MIPFinal@ds061558.mongolab.com:61558/mip_final',mongoConnected);


var dbOutside;
function mongoConnected (err, db){
		if (err) throw err;
		console.log("Connected to Database");
			dbOutside = db;
			var collection = db.collection('jpgFile');
			//insert
/* 			http://54.250.127.255:5566/imageFile/IM/1.jpg */
	/*
			collection.insert([{'url': 'IM', 'fileExtension': 'jpg'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'uist', 'fileExtension': 'jpg'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'tiny', 'fileExtension': 'jpg'}],{w:1}, function(docs) {});
			collection.insert([{'url': 'test', 'fileExtension': 'jpg'}],{w:1}, function(docs) {});

	*/
			///數有幾筆
			collection.count(function(err, count) {
				console.log("There are " + count + " records.");
			});
	/*
			//把每個拉出來成json格式
			collection.find().each(function(err, doc) {
				if(doc != null) console.log("Doc from Each ");
				console.dir(doc);
			});
	*/
			//這樣可以直接把那些東西讀進來當做array使用！
/*
			collection.find().toArray(function(err, docs) {
				console.log("Printing docs from Array")
				docs.forEach(function(doc) {
					console.log("---------------------");
					console.dir(doc);
					console.log("FUCK!!!"+doc.url);
				});
			});
*/
			
			//不能太早關dbclose，不然就會爛掉~~~~~~~~~~
	
			//以下是可能的找法
	/*
			collection.find({'a':1}).nextObject(function(err, doc) {
			collection.find({}, {'skip':1, 'limit':1, 'sort':'a'}).toArr
			// Find all records with 'a' > 1, you can also use $lt, $gte or $lte
			collection.find({'a':{'$gt':1}}).toArray(function(err, docs) {
			collection.find({'a':{'$gt':1, '$lte':3}}).toArray(function(err, docs) {
			// Find all records with 'a' in a set of values
			collection.find({'a':{'$in':[1,2]}}).toArray(function(err, docs) {
			// Find by regexp
			collection.find({'a':/[1|2]/}).toArray(function(err, docs) {
			// Print Query explanation
			collection.find({'a':/[1|2]/}).explain(function(err, doc) {
	*/
	}

dbOutside.collection('jpgFile').count(function(err, count) {
	console.log("There are " + count + " records.");
});
	
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
    
    console.log(req.body);
    // res.send(req.body);

    //經過express.bodyParser()後，得到的req.body已經是json格式
    //所以直接指定給一個var，他就會用物件的方式轉換

    var responseData=req.body;
    responseData.id = "123456";
    responseData.username=responseData.username+"!幹你妹";
    responseData.email=responseData.email+"回傳ㄌ";
    //用send傳回去
    res.send(responseData);

});
