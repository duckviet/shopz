import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(8080, () =>
  console.log("Server running on port http://localhost:8080")
);

const MONGO_URL =
  "mongodb+srv://ducnguyenkudo:Duc201103@cluster0.vsfsyoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MONGODB_URL = "mongodb://localhost:27017";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.set("debug", true);
mongoose.connection.on("error", (error: Error) => console.log(error));
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/", router());
