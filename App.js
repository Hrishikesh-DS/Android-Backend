import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import DataRoutes from "./Kanbas/data/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(express.json());
DataRoutes(app);
app.listen(process.env.PORT || 4000);