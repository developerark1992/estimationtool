import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Images from "../assets/image"; // Make sure the path is correct



const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle card border toggle
  const toggleBorder = (event) => {
    const element = event.currentTarget;
    element.classList.toggle("border-blue-500");
    element.classList.toggle("border-2");
  };

  return (
    <div className="h-full min-h-screen lg:overflow-y-hidden">
      {/* Main Content Area */}
      
      
      <div className="flex flex-col h-full min-h-screen lg:flex-row">
        {/* First Column */}
        <div className="w-full pt-7 pl-5 pr-5 pb-5 lg:w-1/3 lg:pt-7 lg:pl-24 lg:pr-16 lg:mb-8 bg-white flex-grow">
          <div className="flex flex-col items-center lg:items-start">
            <h6 className="text-neutral-500 font-light mb-2 text-xs">
              <span className="text-amber-300 font-bold">Step 1 </span>of 7
            </h6>
            <div className="flex items-center space-x-2 pb-7">
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-amber-300"></div>
              </div>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-gray-200"></div>
                  </div>
                ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <h1 className="text-3xl font-medium mb-4">What You Want?</h1>
          <p className="mb-4 text-neutral-500 text-base font-normal">
            Do you need to revamp an existing website or create a whole new
            website?
          </p>
          <button
            className="w-full bg-sky-500 hover:bg-opacity-50 text-base text-white font-semibold py-3 mt-5 px-14 rounded-lg lg:w-auto lg:mt-24"
            onClick={() => navigate('/stepone')} // Use navigate to go to /stepone
          >
            Next
          </button>
        </div>

        {/* Second Column */}
        <div className="w-full lg:w-2/3 bg-[#FFFAF2] flex-grow">
          <div className="px-5 pt-10 pb-5 md:px-15 md:pb-12 lg:px-24 lg:pb-24">
            <h2 className="text-2xl text-zinc-900 font-bold mb-2">
              Select a Design Style
            </h2>
            <h3 className="text-sm text-zinc-900 font-medium">
              Please select one
            </h3>
            <p className="mb-5 text-neutral-500 font-medium text-sm">
              Revamp an existing website or create a brand-new one.
            </p>

            {/* Image Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div
                className="bg-white rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl"
                onClick={toggleBorder}
              >
                <img src={Images.Revamp} alt="Revamp" className="mb-4 w-full object-cover rounded-xl" />
                
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <img
                      src={Images.RevampSVG}
                      alt="Icon"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-left font-semibold text-sm text-gray-900 ml-2">
                      Revamp My Existing Website
                    </p>
                  </div>
                  <p className="text-left text-zinc-600 font-normal text-sm pt-3">
                    Give your current website a fresh, modern look while
                    retaining key elements.
                  </p>
                </div>
              </div>

              <div
                className="bg-white rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl"
                onClick={toggleBorder}
              >
                <img
                  src={Images.NewWeb}
                  alt="New Web"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <img
                      src={Images.NewWebSVG}
                      alt="Icon"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-left font-semibold text-sm text-gray-900 ml-2">
                      Build a New Website
                    </p>
                  </div>
                  <p className="text-left text-zinc-600 font-normal text-sm pt-3">
                    Create a completely new, custom website tailored to your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
