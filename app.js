const express = require("express");
const connectDB = require("./src/Config/database");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");
dotenv.config({});
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// This runs before defining any routes, so all routes can handle JSON requests
// Middleware to parse incoming JSON request bodies into `req.body`
app.use(express.json());
app.use(cookieParser());

//routes
const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const requestRouter = require("./src/routes/request");
const userRouter = require("./src/routes/user");
const user = require("./src/Models/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

//database connect before server
connectDB().then(() => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ` + process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
});
