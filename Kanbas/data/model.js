import mongoose from "mongoose";
import schema from "./schema.js";
const Model = mongoose.model("androidData", schema);
export default Model;