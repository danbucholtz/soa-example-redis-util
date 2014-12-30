var redis = require("redis");
var config = require("soa-example-service-config").config();
var Q = require("q");

var redisClient = redis.createClient();

redisClient.on("error", function (err) {
	console.log("Redis Error: " + err);
});

var getRedisClient = function(){
	return redisClient;
};

var put = function (key, object){
	if ( object ){
		var json = JSON.stringify(object);
		redisClient.set(key, json);
	}
};

var purge = function(key){
	// todo
};

var purgeAll = function(){
	// todo
}

var get = function (key){
	var deferred = Q.defer();

	redisClient.get(key, function(err, json){
		var object = null;
		try{
			object = JSON.parse(json);
		}
		catch(ex){
		}
		deferred.resolve(object);
	});

	return deferred.promise;
};

module.exports = {
	getRedisClient : getRedisClient,
	put: put,
	get: get,
	purge: purge,
	purgeAll: purgeAll
}