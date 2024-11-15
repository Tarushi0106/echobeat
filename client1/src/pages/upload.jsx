import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [songFile, setSongFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., API call)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("genre", genre);
    formData.append("description", description);
    formData.append("songFile", songFile);
    
    // Example API request (use the actual URL for your backend)
    fetch("http://localhost:5000/api/form/upload", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Reset form fields after successful upload
      setTitle("");
      setArtist("");
      setGenre("");
      setDescription("");
      setSongFile(null);
      
      // Optionally, show a success message using toast
      toast.success("Song uploaded successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      // Optionally, show an error message using toast
      toast.error("Error uploading song!");
    });
  };

  return (
    <div>
      <div className="upload-container">
        <h1>Upload Song Details</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="title">Song Title:</label>
          <input
            type="text"
            className="input-field"
            id="stitle"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="artist">Artist Name:</label>
          <input
            type="text"
            className="input-field"
            id="artist"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            className="input-field"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="description">Description (optional):</label>
          <input
            type="text"
            className="input-field"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="songFile">Upload Song:</label>
          <input
            type="file"
            className="input-field"
            id="songFile"
            name="songFile"
            accept="audio/*"
            onChange={(e) => setSongFile(e.target.files[0])}
            required
          />
          <br />
          <br />

          <button type="submit" className="green-btn">
            Upload
          </button>
        </form>
      </div>

      <footer>
        <div className="f-info">
          <div className="f-info-socials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="f-info-brand"> &copy; EchoBeat Pvt Limited</div>
          <div className="f-info-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Upload;
