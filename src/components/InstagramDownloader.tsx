import React from 'react';

const InstagramDownloader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        {['Video', 'Photo', 'Story', 'Reel', 'IGTV'].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 text-white text-sm font-medium bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring focus:ring-purple-400 transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-white mb-2">Instagram Video Download</h1>
      <p className="text-white text-lg mb-8 text-center">
        Download Video Instagram, Photo, Reels, Stories, IGTV online
      </p>

      {/* Input Field */}
      <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
        <input
          type="text"
          placeholder="Paste URL Instagram"
          className="w-full py-3 px-4 text-gray-800 focus:outline-none"
        />
        <button className="px-4 text-purple-500 hover:text-purple-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 9l5-5m0 0l5 5m-5-5v12m-4 4h8"
            />
          </svg>
        </button>
      </div>

      {/* Download Button */}
      <button className="flex items-center mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13V8a4 4 0 10-8 0v5m12 4H4m6 0v4m0 0H8m2 0h2"
          />
        </svg>
        Download
      </button>
    </div>
  );
};

export default InstagramDownloader;
