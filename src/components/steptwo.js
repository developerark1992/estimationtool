import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../assets/image"; // Ensure the path is correct

const StepTwo = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle card border toggle
  const toggleBorder = (event) => {
    const element = event.currentTarget;
    element.classList.toggle("border-blue-500");
    element.classList.toggle("border-2");
  };

  return (
    <div className="h-full min-h-screen lg:overflow-y-hidden">
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row h-full min-h-screen">
        {/* First Column */}
        <div className="w-full pt-7 pl-5 pr-5 pb-5 lg:w-1/3 lg:pt-7 lg:pl-24 lg:pr-16 lg:mb-8 bg-white flex-grow">
          <div className="flex flex-col items-center lg:items-start">
            <img
              className="h-auto max-w-full pb-10 cursor-pointer"
              onClick={() => navigate("/stepone")}
              src={Images.BackIcon}
              alt="Back Icon"
            />
            <h6 className="text-neutral-500 font-light mb-2 text-xs">
              <span className="text-amber-300 font-bold">Step 3 </span>of 7
            </h6>
            <div className="flex items-center space-x-2 pb-7">
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-amber-300"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-amber-300"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-amber-300"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-gray-200"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-gray-200"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-gray-200"></div>
              </div>
              <div className="relative flex items-center">
                <div className="w-6 h-2 rounded-xl lg:w-9 lg:h-2 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-medium mb-4">Choose Your Pages</h1>
          <p className="mb-4 text-neutral-500 text-base font-normal">
            Select the pages to include in your website
          </p>
          <button
            className="w-full bg-sky-500 hover:bg-opacity-50 text-base text-white font-semibold py-3 mt-5 px-14 rounded-lg lg:w-auto lg:mt-24"
            onClick={() => navigate("/stepthree")}
          >
            Next
          </button>
        </div>

        {/* Second Column */}
        <div className="w-full lg:w-2/3 bg-[#FFFAF2] flex-grow">
          <div className="flex flex-col xs:flex-row p-4">
            <h1 className="text-lg font-normal">
              Choose Your Pages{" "}
              <span className="text-blue-600 text-base">Selected Pages (3)</span>
            </h1>

            <div className="scrollable-container overflow-x-auto grid grid-cols-3 gap-4">
              {/* Item 1 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page5}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">Home</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      The main landing page introducing your site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page4}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">Service</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      Details of the services you offer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page1}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">About Us</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      Information about your company or organization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page2}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">Contact Us</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      A page with contact information and a form.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page6}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">Products</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      Showcase the products you sell.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div
                className="bg-white border-2 border-gray-200 rounded-lg shadow-md cursor-pointer justify-center hover:border-blue-500 hover:border-2 hover:rounded-xl p-2"
                onClick={toggleBorder}
              >
                <img
                  src={Images.Page3}
                  alt="Image 1"
                  className="mb-4 w-full object-cover rounded-xl"
                />
                <div className="p-4">
                  <div className="relative flex flex-row items-center">
                    <p className="text-left font-semibold text-base text-gray-900">Blog</p>
                  </div>
                  <div className="relative flex flex-row items-center">
                    <p className="text-left text-sm text-gray-400">
                      A blog page to post articles and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;