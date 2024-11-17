const { Schema, model } = require("mongoose");  
const uploadSchema = new Schema({ username: { type: String }, email: { type: String },  
 message: { type: Buffer, required: true }, }); 
 // create a new collections(Model) 
const upload = new model("upload", uploadSchema);
 module.exports = upload;  