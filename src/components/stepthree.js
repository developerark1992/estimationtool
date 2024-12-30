import React, { useState } from "react";
import stepData from "../page.json"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Images from "../assets/image"; // Make sure the path is correct

const StepThree = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [activeTab, setActiveTab] = useState("basic"); // State for tabs
  const [popupOpen, setPopupOpen] = useState(false); // State for popup

  const togglePopup = () => setPopupOpen(!popupOpen); // Toggle popup visibility

  return (
    <div className="flex flex-col lg:flex-col h-full min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full pt-7 pl-5 pr-5 pb-5 lg:w-1/3 lg:pt-7 lg:pl-24 lg:pr-16 lg:mb-8 bg-white flex-grow">
          <div className="flex flex-col items-center lg:items-start">
            <img
              className="h-auto max-w-full pb-10 cursor-pointer"
              onClick={() => navigate("/steptwo")}
              src={Images.BackIcon}
              alt="Back Icon"
            />
            <h6 className="text-neutral-500 font-light mb-2 text-xs">
              <span className="text-amber-300 font-bold">Step 4</span> of 7
            </h6>
            <div className="flex items-center space-x-2 pb-7">
              {Array(7)
                .fill("")
                .map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-2 rounded-xl lg:w-9 lg:h-2 ${
                      i < 4 ? "bg-amber-300" : "bg-gray-200"
                    }`}
                  />
                ))}
            </div>
          </div>
          <h1 className="text-3xl font-medium mb-4">Select Your Features</h1>
          <p className="mb-4 text-neutral-500 text-base font-normal">
            Choose from basic and premium features to enhance your website's
            functionality and user experience.
          </p>
          <button
            className="w-full bg-sky-500 hover:bg-opacity-50 text-base text-white font-semibold py-3 mt-5 px-14 rounded-lg lg:w-auto lg:mt-24"
            onClick={() => navigate("/stepfour")}
          >
            Next
          </button>
        </aside>

        {/* Feature Content */}
        <main className="w-full lg:w-2/3 h-full min-h-screen bg-[#FFFAF2] flex-grow">
          <div className="px-5 pt-10 pb-5 below-500:p-8 pt-0 below-500:pt-12 pr-12">
            <h1 className="text-lg font-normal pb-3">
              Available Features{" "}
              <span className="text-blue-600 text-base">Selected (3)</span>
            </h1>

            {/* Tabs */}
            <div className="flex justify-start mb-6">
              <button
                className={`tab-btn px-6 py-2 font-semibold rounded-tl rounded-bl ${
                  activeTab === "basic"
                    ? "bg-sky-500 text-white border-b-2 border-sky-500"
                    : "text-gray-500 border-2 border-stone-300 hover:text-sky-500 hover:border-sky-500"
                }`}
                onClick={() => setActiveTab("basic")}
              >
                Basic
              </button>
              <button
                className={`tab-btn px-6 py-2 font-semibold rounded-tr rounded-br ${
                  activeTab === "premium"
                    ? "bg-sky-500 text-white border-b-2 border-sky-500"
                    : "text-gray-500 border-2 border-stone-300 hover:text-sky-500 hover:border-sky-500"
                }`}
                onClick={() => setActiveTab("premium")}
              >
                Premium
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "basic" && (
              <div>
                <p className="mb-5 text-neutral-500 font-medium text-sm">
                  (You can add all elements from this section for free)
                </p>
                {/* Basic Features Grid */}
                <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3">
                  {/* Basic Feature Cards */}
                  {stepData.steps["4a"].map((step, index) => (                
                      <div                        
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:border-blue-500"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-10 h-10 mb-3"
                        />
                        <h2 className="font-semibold text-black mb-2">
                        {step.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-3">
                        {step.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Costs From: <span className="font-semibold">Free</span>
                        </p>
                        <p className="text-xs text-gray-500">
                          
                          <span className="font-semibold">3 Days</span>
                        </p>
                      </div>
                    
                ))}
                </div>
              </div>
            )}

            {activeTab === "premium" && (
              <div>
                <p className="mb-5 text-neutral-500 font-medium text-sm">
                  (You can add all elements from this section to purchase)
                </p>
                {/* Premium Features Grid */}
                <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3">
                  {/* Premium Feature Cards */}
                  {stepData.steps["4b"].map((step, index) => (  
                      <div                        
                      className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:border-blue-500"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-10 h-10 mb-3"
                      />
                      <h2 className="font-semibold text-black mb-2">
                      {step.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-3">
                      {step.description}
                      </p>
                        <p className="text-xs text-gray-500">
                          Costs From:{" "}
                          <span className="font-semibold">Custom</span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Duration From:{" "}
                          <span className="font-semibold">5 Days</span>
                        </p>
                      </div>
                    
                ))}
                </div>
              </div>
            )}

            {/* Request a Feature Section */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 mt-7 mr-16 w-[50%] ml-auto p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-white rounded-full">
                  <img
                    src="../img/pencil.svg"
                    alt="pencil"
                    className="w-4 h-4 object-cover"
                  />
                </div>
                <p className="pl-2 text-sm text-white">
                  Can’t find what you’re looking for?
                </p>
                <button
                  type="button"
                  className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
                  onClick={togglePopup}
                >
                  Request a feature
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed top-0 right-0 w-96 h-full bg-white text-black transform translate-x-0 transition-transform duration-300">
          <div className="pt-3 pl-3">
            <button
              onClick={togglePopup}
              className="text-black font-semibold"
            >
              X
            </button>
          </div>
          <div className="p-4">
            <p className="text-black font-normal text-lg border-b-2 border-gray-200 pb-3">
              Missing A Feature
            </p>
            <p className="text-gray-300 font-normal text-xs">
              Anything you're missing in our product? Drop a message here to
              let us know!
            </p>
          </div>
          <div className="pl-4 pr-4 pt-3">
            <textarea
              className="border-2 border-gray-300 p-3 rounded-lg w-full"
              placeholder="Describe the feature you need..."
            ></textarea>
          </div>
          <div className="pl-4 pr-4 pt-3 flex justify-end">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-normal rounded-lg text-xs px-4 py-2.5"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepThree;
