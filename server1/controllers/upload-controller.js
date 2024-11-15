const upload = require("../models/upload-model");

const uploadForm = async (req, res) => {
  try {
    const response = req.body;
    await upload.create(response);
    return res.status(200).json({ message: " song uploaded successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "song not uploaded" });
  }
};

module.exports = upload;