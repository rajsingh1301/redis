const client = require("./client");

// Waits for a value from the Redis list and logs the popped result.
async function init(params) {
  const result = await client.blpop("message", 4);

  console.log(result);
}
init();
