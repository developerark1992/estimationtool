import React, { useState } from "react";
import stepData from "../page.json"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Images from "../assets/image"; // Make sure the path is correct

const StepFive = () => {
  const navigate = useNavigate();

   return (
    <div className="flex flex-col lg:flex-col min-h-screen">
      

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 bg-white p-5 lg:px-24">
          <img
            className="h-auto max-w-full pb-10 cursor-pointer"
            onClick={() => navigate("/stepfour")}
            src={Images.BackIcon}
            alt="Back Icon"
          />
          <h6 className="text-neutral-500 font-light mb-2 text-xs">
            <span className="text-amber-300 font-bold">Step 6 </span>of 7
          </h6>
          <div className="flex space-x-2 pb-7">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-2 lg:w-9 rounded-xl ${
                  i < 6 ? "bg-amber-300" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
          <h1 className="text-3xl font-medium mb-4">Choose Your Content Style</h1>
          <p className="mb-4 text-neutral-500 text-base">
            Select the type of content you want to include on your website and see a preview on your phone.
          </p>
          <button
            className="w-full bg-sky-500 hover:bg-opacity-50 text-base text-white font-semibold py-3 mt-5 px-14 rounded-lg lg:w-auto lg:mt-24"
            onClick={() => navigate("/summary")}
          >
            Next
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 bg-[#FFFAF2] flex-grow">
          <div className="flex flex-col lg:flex-row p-4 justify-evenly">
            <div className="pt-10">
              <img
                className="h-auto max-w-full"
                src={Images.MobileSelect}
                alt="Mobile Selection"
              />
            </div>
            <div className="pt-0 lg:pt-12">
              <h1 className="text-lg font-normal">
                Click to preview{" "}
                <span className="text-blue-600 text-base">Selected Preferences (0)</span>
              </h1>
              <p className="text-sm text-gray-400">
                Select the type of content that will commonly show up on your website.
              </p>
               <div className="grid grid-cols-2 gap-2 pt-5">
                 {stepData.steps["6"]
                   .sort((a, b) => {

                     // Then, sort the rest alphabetically by title
                     return a.title.localeCompare(b.title);
                   })
                   .map((step, index) => (
                     <div
                       className="bg-white border-2 border-gray-200 rounded-lg p-3 hover:border-blue-500"
                     >
                       <h1 className="text-black font-semibold">{step.title}</h1>
                       <p className="text-gray-500 text-sm">{step.description}</p>
                     </div>
                   ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
