import http from "http";
import express from "express";
import config from "./config/environment";
import router from "./routes/routes";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/** Rules of our API */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

/** Routes go here */
app.use("/", router);

const httpServer = http.createServer(app);

app.listen(config.server.port, () => {
  console.log(
    `Server is running ${config.server.hostname}:${config.server.port}`
  );
});
