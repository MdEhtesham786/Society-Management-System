import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import memberModel from "./models/memberModel.js";
import { readFile } from "fs";
// import userModel from "./models/userModel.js";
import userRoutes from "./routes/userRoutes.js";
import routes from "./routes/routes.js";
import transactionRoutes from './routes/transactionRoutes.js';
import catchAsyncErrors from "./middleware/catchAsyncErrors.js";
import userModel from "./models/userModel.js";
import { setPrimaryColor } from "../frontend/src/reducer/adminSettingsSlice.js";

const app = express();

// Middlerwares
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.options("*", cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", routes);
app.use('/api/v1/transaction', transactionRoutes);

// Endpoints
app.get("/", catchAsyncErrors(async (req, res, next) => {
  res.json({ success: true });
})
);

app.get("/makeSeller", catchAsyncErrors(async (req, res) => {
  const user = await userModel.findOne({ _id: '664097eef0ed69d6cfe85765' });
  // user.roles.push('admin');
  // await user.save();
  res.json({ user });
})
);
app.get("/updateSeller", catchAsyncErrors(async (req, res) => {
  // const user = await userModel.findOne({ _id: '663cc99733356e422ca18d05' });
  // const settings = {
  //   primaryColor: '#ffffff',
  //   secondaryColor: '#e9f2f2'
  // };
  // const result = await userModel.findByIdAndUpdate('663cc99733356e422ca18d05', { settings }, { new: true, runValidators: true });
  // user.roles.push('admin');
  // await user.save();
  res.json({ result });
})
);

app.get('/addMembers', catchAsyncErrors(async (req, res) => {
  res.json({ memberList });
}));

const port = process.env.PORT || 5000;
const hostname = "127.0.0.1";
const start = async (url) => {
  connectDB(url);
  const server = app.listen(port, () => {
    console.log(`This server is running on port http://${hostname}:${port}`);
  });
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Rejection");
    server.close(() => {
      process.exit(1);
    });
  });
};

start(process.env.MONGO_URI);
