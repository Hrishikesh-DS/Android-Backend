import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    ActivityName: String,
    ContentDescription: String,
    ElementName: String,
    children: [{data: dataSchema}]
},
{ collection: "courses" });
export default dataSchema;