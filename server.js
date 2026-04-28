const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  res.send("Backend is running and connected to MySQL service name: db");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
