const { Schema, model } = require("mongoose");  
const uploadSchema = new Schema({ username: { type: String, required: true }, email: { type: String, required: true },  
 message: { type: String, required: true }, }); 
 // create a new collections(Model) 
const upload = new model("upload", uploadSchema);
 module.exports = upload;  