import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();
const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();
import cors from "cors";
app.use(cors());
import userModel from "./models/userModel.js";
app.get('/', async (req, res) => {
    try {
        res.json({
            success: true,
            name: "Xyz"
        });
    } catch (err) {
        console.log(err);
    }
});
const start = async (url) => {
    connectDB(url);
    app.listen(port, () => {
        console.log(`This server is running on port http://${hostname}:${port}`);
    });
    process.on("unhandledRejection", err => {
        console.log(`Error: ${err.message}`);
        console.log('Shutting down the server due to Unhandled Promise Rejection');
        server.close(() => {
            process.exit(1);
        });
    });

};
start(process.env.MONGO_URI);
