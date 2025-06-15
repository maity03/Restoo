import express, { json } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
