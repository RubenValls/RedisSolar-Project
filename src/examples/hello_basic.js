const redis = require('redis');

// Create a client and connect to Redis.
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  // password: 'password',
});

// Run a Redis command, receive response in callback.
client.set('hello', 'world', (err, reply) => {
  //After a set function we will get the response of the server:
  console.log(reply); // OK

  // Run a second Redis command now we know that the
  // first one completed.  Again, response in callback.
  client.get('hello', (getErr, getReply) => {
    //'We can call another function to get the information inside the set function:
    console.log(getReply); // world

    // Quit client and free up resources.
    client.quit();
  });
});
