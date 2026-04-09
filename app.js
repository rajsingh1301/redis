const express = require("express");
const client = require("./client");
const axios = require("axios");

const app = express();

// Handles the root route by serving cached data or fetching and caching it.
app.get("/", async (req, res) => {
  const catchedValue = await client.get("message");

  if (catchedValue) {
    res.json(catchedValue);
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
  await client.set("message", data);
  client.expire("message", 10);
  return res.json(data);
});

// Starts the HTTP server on port 9000.
app.listen(9000, () => {
  console.log("server is running at port 9000");
});
