const express = require("express");
const { Client } = require("pg");

const app = express();

const client = new Client({
  host: "postgres-postgresql",
  user: "myuser",
  password: "mypassword",
  database: "mydb",
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error(err));

app.get("/", async (req, res) => {
  const result = await client.query("SELECT NOW()");
  res.send(`Database Connected: ${result.rows[0].now}`);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});
