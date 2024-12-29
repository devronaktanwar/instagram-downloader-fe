import React, { useState } from "react";
import axios from "axios";

const App1: React.FC = () => {
  const [url, setUrl] = useState("");
  const [reelData, setReelData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url) {
      setError("Please enter a valid Instagram URL.");
      return;
    }
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/download", {
        url,
      });
      setReelData(response.data.media[0]);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch reel. Please check the URL and try again.");
    } 
  };

  const downloadVideo = async () => {
    if (!reelData || !reelData.url) {
      setError("No video to download.");
      return;
    }
    try {
      const response = await axios.get(reelData.url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "video/mp4" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "instagram-reel.mp4";
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Failed to download video", err);
      setError("Failed to download video. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", width: "100%" }}>
      <h1>Instagram Reel Downloader</h1>
      <input
        type="text"
        placeholder="Enter Instagram Reel URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "10px", width: "70%" }}
      />
      <button
        onClick={handleDownload}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Fetch Reel
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {reelData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Reel Preview</h3>
          <video controls style={{ width: "300px" }}>
            <source src={reelData.url} type="video/mp4" />
          </video>
          <button
            onClick={downloadVideo}
            style={{
              display: "block",
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download Video
          </button>
        </div>
      )}
    </div>
  );
};

export default App1;
