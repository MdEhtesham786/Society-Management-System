import express from "express";
// const express = require('express')
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();
import cors from "cors";
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        success: true,
        name: "Ehtesham"
    });
});
app.listen(port, () => {
    console.log(`This server is running on port http://${hostname}:${port}`);
});