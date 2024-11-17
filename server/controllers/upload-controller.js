const upload = require("../models/upload-model");
const fs = require("fs");
const uploadForm = async (req, res) => {

  try {
    console.log(req.file.path);
    // const response = req.body;
    const songFile = req.file;
    const fileBuffer = fs.readFileSync(req.file.path);
    // if (!songFile) {
    //   return res.status(400).json({ message: "No file uploaded" });
    // }
    await upload.create({message:fileBuffer});
    return res.status(200).json({ message: " song uploaded successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message:`${error.message}` });
  }
};

module.exports = uploadForm;