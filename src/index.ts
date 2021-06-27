import express from "express";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen("3000", () => {
  console.log("server is running");
});
