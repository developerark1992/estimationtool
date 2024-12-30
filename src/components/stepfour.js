import React, { useState } from "react";
import stepData from "../page.json"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Images from "../assets/image"; // Make sure the path is correct

const StepFour = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [popupContent, setPopupContent] = useState("");
  const [popupImage, setPopupImage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (content, image) => {
    setPopupContent(content);
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-col min-h-screen">
      {/* Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 bg-white p-5 lg:px-24">
          <img
            className="h-auto max-w-full pb-10 cursor-pointer"
            onClick={() => navigate("/stepthree")}
            src={Images.BackIcon}
            alt="Back Icon"
          />
          <h6 className="text-neutral-500 font-light mb-2 text-xs">
            <span className="text-amber-300 font-bold">Step 5 </span>of 7
          </h6>
          <div className="flex space-x-2 pb-7">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-2 lg:w-9 rounded-xl ${
                  i < 5 ? "bg-amber-300" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
          <h1 className="text-3xl font-medium mb-4">Choose Your Design Style</h1>
          <p className="mb-4 text-neutral-500 text-base">
            Select a design style that best represents your brand and vision.
          </p>
          <button
            className="w-full bg-sky-500 hover:bg-opacity-50 text-base text-white font-semibold py-3 mt-5 px-14 rounded-lg lg:w-auto lg:mt-24"
            onClick={() => navigate("/stepfive")}
          >
            Next
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 bg-[#FFFAF2] p-4">
          <h1 className="text-lg font-normal">
            Choose Your Pages{" "}
            <span className="text-blue-600 text-base">Selected Pages (3)</span>
          </h1>
          <div className="grid grid-cols-3 gap-3 pt-5 overflow-y-auto h-[550px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
          {stepData.steps["5"]
    .sort((a, b) => {     

      // Then, sort the rest alphabetically by title
      return a.title.localeCompare(b.title);
    })
    .map((step, index) => (
              <div         
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-2 cursor-pointer hover:border-blue-500"
                onClick={() => openPopup(step.title, step.image)}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="mb-4 w-full rounded-xl object-cover"
                />
                <p className="font-semibold text-base">{step.title}</p>
                <p className="text-xs text-gray-800 pb-3">
                  {step.description}
                </p>
                <p className="text-gray-500 text-xs">
                  Duration From: <span className="font-semibold">3 Days</span>
                </p>
              </div>
               ))}
            
          </div>

          {/* Share Your Details Section */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 mt-7 w-[60%] ml-auto p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white rounded-full">
                <img src={Images.PencilIcon} alt="Pencil" className="w-4 h-4" />
              </div>
              <p className="pl-2 text-sm text-white">
                Share your details and design references with us!
              </p>
              <div className="pl-2">
                <button
                  type="button"
                  className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => openPopup("Add Details", Images.AddIcon)}
                >
                  Add Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-300">
          <button
            onClick={closePopup}
            className="text-black font-semibold p-3"
          >
            X
          </button>
          <div className="p-4">
          <img
  src={popupImage || Images.Classic} // Use Images.Classic as fallback
  alt="Popup Content"
  className="w-full h-52 object-cover rounded-lg mb-4"
/>


            <p>{popupContent}</p>
          </div>
          <form className="p-4">
            <label className="text-sm font-semibold">Add Details</label>
            <input
              type="text"
              className="border-2 w-full p-3 rounded-lg my-2 bg-[#FFFAF2]"
              placeholder="Write any details you want to add in your design style"
            />
            <label className="text-sm font-semibold">Description</label>
            <textarea
              className="border-2 w-full p-3 rounded-lg my-2 bg-[#FFFAF2]"
              rows="4"
              placeholder="Add explanation here"
            ></textarea>
            <label className="text-sm font-semibold">Add Attachments</label>
            <input
              type="file"
              className="border-2 w-full p-3 rounded-lg my-2 bg-[#FFFAF2]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StepFour;