var redis = require("redis");
var config = require("soa-example-service-config").config();

var redisClient = redis.createClient();

redisClient.on("error", function (err) {
	console.log("Redis Error: " + err);
});

var getRedisClient = function(){
	return redisClient;
};

module.exports = {
	getRedisClient : getRedisClient
}