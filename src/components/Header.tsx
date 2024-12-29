// import { MdSlowMotionVideo } from "react-icons/md";
// import { IoMdDownload } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { TbLoader } from "react-icons/tb";

// import { twMerge } from "tailwind-merge";
import { useState } from "react";
import axios from "axios";

// const tabitems = [
//   {
//     title: "Video",
//     icon: <MdSlowMotionVideo className="text-green-600" />,
//   },
//   {
//     title: "Video",
//     icon: <MdSlowMotionVideo className="text-green-600" />,
//   },
//   {
//     title: "Video",
//     icon: <MdSlowMotionVideo className="text-green-600" />,
//   },
//   {
//     title: "Video",
//     icon: <MdSlowMotionVideo className="text-green-600" />,
//   },
//   {
//     title: "Video",
//     icon: <MdSlowMotionVideo className="text-green-600" />,
//   },
// ];
const Header = () => {
  const [url, setUrl] = useState("");
  const [reelData, setReelData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch = async () => {
    if (!url) {
      setError("Please enter a valid Instagram URL.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("https://instafetch.onrender.com/api/download", {
        url,
      });
      setReelData(response.data.media[0]);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch reel. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
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
    <div className="pb-4">
      <div className="bg-gradient-to-r from-green-700 to-green-300 pb-4">
        <div className="w-[95%] m-auto pt-4 flex flex-col gap-5">
          {/* <div className="flex justify-center bg-white rounded-md">
          {tabitems.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "flex items-center gap-1 p-2",
                index != 0 ? "border-l" : ""
              )}
            >
              {item.icon}
              <span className="text-xs">{item.title}</span>
            </div>
          ))}
        </div> */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="text-2xl font-semibold text-white">
                Instagram Reel download
              </h1>
              <p className="text-xs font-medium text-gray-100">
                Download instagram reels online with instafech
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-lg outline-none"
                  placeholder="Enter instagram url"
                  value={url}
                  onChange={(e) =>{ setUrl(e.target.value);setError("")}}
                />
                {error && <p className="text-xs pl-1 text-white">{error}</p>}
              </div>
              <button
                className="w-full py-2 bg-green-600 text-white rounded flex items-center justify-center gap-1"
                onClick={handleSearch}
              >
                {loading ? (
                  <TbLoader className="animate-spin" size={26}/>
                ) : (
                  <>
                    <IoSearchCircleOutline size={24} />
                    Search
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {reelData && (
          <div className="flex flex-col justify-center items-center pt-4 gap-2">
            <video controls className="w-52 rounded-lg">
              <source src={reelData.url} type="video/mp4" />
            </video>
            <button
              onClick={handleDownload}
              className="w-36 bg-green-600 py-2 px-1 text-white rounded"
            >
              Download Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
